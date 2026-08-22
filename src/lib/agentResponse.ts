// Orchestrates content negotiation for page requests. Kept free of
// `astro:*` imports so it can be unit-tested with plain Request/Response.

import { negotiate } from "@/lib/negotiate";
import {
  renderCalendarioMarkdown,
  renderFarmaciasMarkdown,
  renderHomeMarkdown,
  renderNotFoundMarkdown,
  renderTrustMarkdown,
} from "@/lib/agentContent";
import {
  aboutCopy,
  contactCopy,
  privacyCopy,
} from "@/content/trustPages";

/** Routes that exist as pages today; anything else falls through to routing. */
export const PAGE_ROUTES: Record<string, (now: Date) => string> = {
  "/": renderHomeMarkdown,
  "/calendario": renderCalendarioMarkdown,
  "/farmacias": renderFarmaciasMarkdown,
  "/about": () => renderTrustMarkdown(aboutCopy),
  "/contact": () => renderTrustMarkdown(contactCopy),
  "/privacy": () => renderTrustMarkdown(privacyCopy),
};

const NEGOTIABLE_METHODS = new Set(["GET", "HEAD"]);
// Static assets (xml, txt, png...) are served outside the render pipeline on
// Vercel; skip negotiation so their behavior stays untouched.
const ASSET_PATHNAME = /\.[a-z0-9]{1,8}$/i;

const MARKDOWN_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

function mergeVary(existing: string | null | undefined): string {
  const tokens = new Set(
    (existing ?? "")
      .split(",")
      .map((token) => token.trim())
      .filter(Boolean),
  );
  tokens.add("Accept");
  tokens.add("Accept-Encoding");
  return [...tokens].join(", ");
}

function stampVary(response: Response): Response {
  response.headers.set("Vary", mergeVary(response.headers.get("Vary")));
  return response;
}

function markdownHeaders(cacheControl: string): HeadersInit {
  return {
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept, Accept-Encoding",
    "Cache-Control": cacheControl,
  };
}

function notAcceptableBody(requested: string): string {
  return [
    "406 Not Acceptable",
    "",
    `This resource cannot be served as "${requested}".`,
    "",
    "Available representations:",
    "- text/html",
    "- text/markdown",
    "",
    "Retry with an Accept header that includes one of the above.",
    "",
  ].join("\n");
}

export async function handleAgentRequest(
  request: Request,
  renderNext: () => Promise<Response>,
): Promise<Response> {
  if (!NEGOTIABLE_METHODS.has(request.method.toUpperCase())) {
    return renderNext();
  }

  const { pathname } = new URL(request.url);
  if (ASSET_PATHNAME.test(pathname)) {
    return renderNext();
  }

  const variant = negotiate(request.headers.get("accept"));

  // Per https://acceptmarkdown.com/guides/returning-406 : only when nothing
  // we can produce is acceptable, and never when the header is missing.
  if (variant === "not-acceptable") {
    return new Response(notAcceptableBody(request.headers.get("accept") ?? ""), {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
        "Cache-Control": "no-store",
      },
    });
  }

  if (variant === "markdown") {
    const renderer = PAGE_ROUTES[pathname];
    if (renderer) {
      return new Response(renderer(new Date()), {
        status: 200,
        headers: markdownHeaders(MARKDOWN_CACHE_CONTROL),
      });
    }

    const response = await renderNext();
    if (response.status === 404) {
      // Agent-friendly 404: same status, markdown recovery body.
      return new Response(renderNotFoundMarkdown(pathname), {
        status: 404,
        headers: markdownHeaders("no-store"),
      });
    }
    return stampVary(response);
  }

  return stampVary(await renderNext());
}
