import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  renderCalendarioMarkdown,
  renderFarmaciasMarkdown,
  renderHomeMarkdown,
  renderNotFoundMarkdown,
  renderTrustMarkdown,
} from "./agentContent";
import {
  aboutCopy,
  contactCopy,
  privacyCopy,
  trustPagePlainText,
  CONTACT_EMAIL,
} from "@/content/trustPages";
import { farmaciasInfo } from "@/lib/generarTurnos";

// Fixed instants inside a known turno window (2026-05-05 belongs to ITATI).
const NOON = new Date("2026-05-05T15:00:00.000Z"); // 12:00 AR

describe("renderHomeMarkdown", () => {
  const markdown = renderHomeMarkdown(NOON);

  it("starts with an H1 and a summary blockquote", () => {
    expect(markdown.startsWith("# Farmacia de turno hoy")).toBe(true);
    expect(markdown).toMatch(/^> .+/m);
  });

  it("includes the on-duty pharmacy facts", () => {
    // 2026-05-05 -> ITATI
    expect(markdown).toContain("Farmacia ITATI");
    expect(markdown).toContain("Vicente Mendieta 1597");
    expect(markdown).toContain("03775-424620");
  });

  it("lists upcoming shifts and recovery links", () => {
    expect(markdown).toContain("## Próximos turnos");
    expect(markdown).toContain("(https://farmaciadeturnomc.site/calendario)");
    expect(markdown).toContain("sitemap-index.xml");
  });

  it("is substantial content for agents", () => {
    expect(markdown.length).toBeGreaterThan(500);
  });
});

describe("renderFarmaciasMarkdown", () => {
  it("lists every pharmacy with address and phone", () => {
    const markdown = renderFarmaciasMarkdown();
    const names = Object.values(farmaciasInfo).map((f) => f.nombre);
    for (const name of names) {
      expect(markdown).toContain(`### ${name}`);
    }
    expect(markdown).toContain("**Teléfono:**");
    expect(markdown).toContain("**Dirección:**");
  });
});

describe("renderCalendarioMarkdown", () => {
  it("renders ISO dates plus readable dates for each upcoming shift", () => {
    const markdown = renderCalendarioMarkdown(NOON);
    expect(markdown).toContain("**2026-05-05**");
    expect(markdown).toContain("2026-05-06");
    expect(markdown).toContain("Farmacia ITATI");
  });
});

describe("renderTrustMarkdown", () => {
  it.each([
    ["/about", aboutCopy],
    ["/contact", contactCopy],
    ["/privacy", privacyCopy],
  ])("mirrors %s copy in markdown", (_slug, copy) => {
    const markdown = renderTrustMarkdown(copy);
    expect(markdown).toContain(`# ${copy.title}`);
    expect(markdown).toContain(copy.description.slice(0, 40));
    for (const section of copy.sections) {
      expect(markdown).toContain(`## ${section.heading}`);
    }
  });

  it("exposes the contact email on the contact page", () => {
    const markdown = renderTrustMarkdown(contactCopy);
    expect(markdown).toContain(CONTACT_EMAIL);
  });
});

describe("renderNotFoundMarkdown", () => {
  it("points agents to sitemap, llms.txt and home", () => {
    const markdown = renderNotFoundMarkdown("/no-existe");
    expect(markdown).toContain("# 404");
    expect(markdown).toContain("/no-existe");
    expect(markdown).toContain("/llms.txt");
    expect(markdown).toContain("sitemap-index.xml");
    expect(markdown).toContain("https://farmaciadeturnomc.site)");
  });
});

describe("trust anchor copy (audit requirement: 500+ chars each)", () => {
  it.each([
    ["about", aboutCopy],
    ["contact", contactCopy],
    ["privacy", privacyCopy],
  ])("%s page copy exceeds 500 characters", (_name, copy) => {
    const text = trustPagePlainText(copy);
    expect(text.length).toBeGreaterThanOrEqual(500);
  });

  it("contact copy contains real, reachable channels only", () => {
    const text = trustPagePlainText(contactCopy);
    expect(text).toContain(CONTACT_EMAIL);
    expect(text).toContain("github.com/gonzzaramirez");
    expect(text).toContain("emergencia");
  });
});

describe("llms.txt (llmstxt.org v2 format)", () => {
  const llmsTxt = readFileSync(
    resolve(process.cwd(), "public/llms.txt"),
    "utf8",
  );

  it("opens with H1 followed by a summary blockquote", () => {
    const lines = llmsTxt.split("\n");
    expect(lines[0]).toMatch(/^# /);
    const blockquoteIndex = lines.findIndex((line) => line.startsWith(">"));
    expect(blockquoteIndex).toBeGreaterThan(0);
    expect(blockquoteIndex).toBeLessThanOrEqual(3);
  });

  it("contains specific when-to-use guidance, not generic marketing", () => {
    expect(llmsTxt).toMatch(/\*\*Cuándo usar este sitio\*\*/);
    expect(llmsTxt).toContain("farmacia está abierta ahora mismo");
    expect(llmsTxt).toContain("No es adecuado");
    expect(llmsTxt).toContain("Accept: text/markdown");
  });

  it("only uses H2 headings for file-list sections after the required H1", () => {
    const headings = llmsTxt
      .split("\n")
      .filter((line) => /^#{1,6}\s/.test(line));
    expect(headings[0]).toMatch(/^# /); // llmstxt.org v2: exactly one leading H1
    expect(headings.slice(1).every((line) => line.startsWith("## "))).toBe(
      true,
    );
    expect(headings.some((line) => line.startsWith("## Páginas"))).toBe(true);
  });

  it("every file-list link is a well-formed absolute URL", () => {
    const links = [...llmsTxt.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
    expect(links.length).toBeGreaterThan(8);
    for (const [, , url] of links) {
      expect(url).toMatch(/^https?:\/\//);
      expect(url.startsWith("https://farmaciadeturnomc.site") || url.includes("gonzzaramirez") || url.includes("montecaseros.gob.ar")).toBe(true);
    }
  });
});
