import { describe, expect, it } from "vitest";
import { handleAgentRequest } from "./agentResponse";

const SITE = "https://farmaciadeturnomc.site";

function requestFor(
  path: string,
  accept: string | null,
  method = "GET",
): Request {
  return new Request(`${SITE}${path}`, {
    method,
    headers: accept === null ? {} : { Accept: accept },
  });
}

// Stands in for Astro routing: renders the HTML shell or a 404.
function fakeNext(options?: {
  status?: number;
  body?: string;
  headers?: Record<string, string>;
}) {
  return async (): Promise<Response> =>
    new Response(options?.body ?? "<html><body>app shell</body></html>", {
      status: options?.status ?? 200,
      headers: options?.headers ?? { "Content-Type": "text/html; charset=utf-8" },
    });
}

describe("handleAgentRequest", () => {
  it("serves text/markdown for known routes with Accept: text/markdown", async () => {
    const response = await handleAgentRequest(
      requestFor("/", "text/markdown"),
      fakeNext(),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe(
      "text/markdown; charset=utf-8",
    );
    expect(response.headers.get("Vary")).toContain("Accept");
    const body = await response.text();
    expect(body.startsWith("# ")).toBe(true);
    expect(body).toContain("Farmacia");
  });

  it("negotiates every documented page route to markdown", async () => {
    for (const route of [
      "/",
      "/calendario",
      "/farmacias",
      "/about",
      "/contact",
      "/privacy",
    ]) {
      const response = await handleAgentRequest(
        requestFor(route, "text/markdown"),
        fakeNext(),
      );
      expect(response.status, route).toBe(200);
      expect(response.headers.get("Content-Type"), route).toContain(
        "text/markdown",
      );
      expect(await response.text()).toMatch(/^# /m);
    }
  });

  it("leaves HTML responses untouched but stamps Vary", async () => {
    const response = await handleAgentRequest(
      requestFor("/", "text/html,application/xhtml+xml,*/*;q=0.8"),
      fakeNext({ headers: { "Content-Type": "text/html; charset=utf-8" } }),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/html");
    const vary = response.headers.get("Vary") ?? "";
    expect(vary).toContain("Accept");
    expect(vary).toContain("Accept-Encoding");
  });

  it("merges Vary with pre-existing values instead of overwriting them", async () => {
    const response = await handleAgentRequest(
      requestFor("/calendario", null),
      fakeNext({
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          Vary: "User-Agent",
          "Cache-Control": "public, max-age=0, s-maxage=3600",
        },
      }),
    );

    const vary = response.headers.get("Vary") ?? "";
    expect(vary).toContain("User-Agent");
    expect(vary).toContain("Accept");
    expect(vary).toContain("Accept-Encoding");
  });

  it("returns 406 with a plain-text list of representations for unsupported types", async () => {
    const response = await handleAgentRequest(
      requestFor("/", "application/pdf"),
      fakeNext(),
    );

    expect(response.status).toBe(406);
    expect(response.headers.get("Content-Type")).toContain("text/plain");
    expect(response.headers.get("Vary")).toContain("Accept");
    const body = await response.text();
    expect(body).toContain("text/html");
    expect(body).toContain("text/markdown");
  });

  it("converts unmatched routes into markdown 404s with recovery links", async () => {
    const response = await handleAgentRequest(
      requestFor("/some-path-that-does-not-exist", "text/markdown"),
      fakeNext({ status: 404 }),
    );

    expect(response.status).toBe(404);
    expect(response.headers.get("Content-Type")).toBe(
      "text/markdown; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("404");
    expect(body).toContain("/llms.txt");
    expect(body).toContain("sitemap-index.xml");
    expect(body).toContain("(https://farmaciadeturnomc.site)");
  });

  it("keeps redirects (e.g. trailing slash) intact for markdown clients", async () => {
    const response = await handleAgentRequest(
      requestFor("/about/", "text/markdown"),
      fakeNext({
        status: 308,
        body: "",
        headers: { Location: `${SITE}/about` },
      }),
    );

    expect(response.status).toBe(308);
    expect(response.headers.get("Location")).toBe(`${SITE}/about`);
    expect(response.headers.get("Vary")).toContain("Accept");
  });

  it("passes non-negotiable requests straight through", async () => {
    let nextCalled = false;
    const next = async (): Promise<Response> => {
      nextCalled = true;
      return new Response("ok", { status: 200 });
    };

    // POST is never negotiated
    const postResponse = await handleAgentRequest(
      new Request(`${SITE}/`, { method: "POST" }),
      next,
    );
    expect(nextCalled).toBe(true);
    expect(postResponse.headers.get("Vary")).toBe(null);

    // Asset-looking paths skip negotiation
    nextCalled = false;
    const assetResponse = await handleAgentRequest(
      requestFor("/sitemap-index.xml", "text/markdown"),
      next,
    );
    expect(nextCalled).toBe(true);
    expect(assetResponse.status).toBe(200);
    // Untouched: no markdown variant, no stamped headers
    expect(assetResponse.headers.get("Content-Type")).toBe(
      "text/plain;charset=UTF-8",
    );
  });
});
