import { describe, expect, it } from "vitest";
import { negotiate, parseAccept } from "./negotiate";

// Test vectors from https://acceptmarkdown.com/guides/accept-parsing
describe("negotiate (acceptmarkdown.com vectors)", () => {
  const cases: Array<[string | null, string]> = [
    ["text/markdown", "markdown"],
    ["text/markdown, text/html;q=0.8", "markdown"],
    ["text/html", "html"],
    ["text/markdown;q=0, text/html", "html"],
    ["text/markdown;q=0", "not-acceptable"], // nothing acceptable -> 406
    [null, "html"], // missing Accept: no constraint
    ["*/*", "html"], // anything is fine: default
  ];

  for (const [accept, expected] of cases) {
    it(`Accept: ${String(accept)} -> ${expected}`, () => {
      expect(negotiate(accept)).toBe(expected);
    });
  }
});

describe("negotiate (real-world headers)", () => {
  it("serves HTML to a Chrome browser header", () => {
    const chrome =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
    expect(negotiate(chrome)).toBe("html");
  });

  it("is case-insensitive for media types", () => {
    expect(negotiate("TEXT/MARKDOWN")).toBe("markdown");
    expect(negotiate("Text/Markdown; Q=0.5, text/HTML")).toBe("html");
  });

  it("handles whitespace around entries and params", () => {
    expect(negotiate(" text/markdown ; q=1 , text/html ; q=0.5 ")).toBe(
      "markdown",
    );
  });

  it("scores each candidate by its own best-matching entry", () => {
    // html matches the exact entry (q=0.4); markdown only the wildcard (q=0.9).
    expect(negotiate("text/*;q=0.9, text/html;q=0.4")).toBe("markdown");
    // Same q via wildcard for both: server default (html) wins the tie.
    expect(negotiate("text/*;q=0.7")).toBe("html");
  });

  it("prefers markdown when it outranks html through wildcards", () => {
    expect(negotiate("*/*;q=0.2, text/markdown;q=0.9")).toBe("markdown");
  });

  it("returns not-acceptable when an unsupported type is requested alone", () => {
    expect(negotiate("application/pdf")).toBe("not-acceptable");
    expect(negotiate("application/json, text/plain;q=0.5")).toBe(
      "not-acceptable",
    );
  });

  it("treats an empty header like no constraint", () => {
    expect(negotiate("")).toBe("html");
    expect(negotiate("   ")).toBe("html");
  });
});

describe("parseAccept", () => {
  it("drops malformed entries and malformed q values", () => {
    const entries = parseAccept("garbage, text/markdown;q=banana, text/html");
    expect(entries).toEqual([
      { type: "text", subtype: "markdown", q: 1 },
      { type: "text", subtype: "html", q: 1 },
    ]);
  });

  it("clamps q values into the [0,1] range", () => {
    const entries = parseAccept("text/markdown;q=2.5, text/html;q=-1");
    expect(entries[0]).toEqual({ type: "text", subtype: "markdown", q: 1 });
    expect(entries[1]).toEqual({ type: "text", subtype: "html", q: 0 });
  });
});
