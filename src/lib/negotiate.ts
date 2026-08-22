// Accept-header negotiation for AI agents, following the algorithm published at
// https://acceptmarkdown.com/guides/accept-parsing :
//   - score each producible representation by the q-value of its best-matching
//     Accept entry (exact type > subtype wildcard > */*)
//   - unmatched entries and explicit q=0 both score 0
//   - highest score wins; ties fall back to our default (HTML)
//   - a *present* header whose best possible score is 0 means nothing
//     acceptable -> 406 Not Acceptable (see https://acceptmarkdown.com/guides/returning-406)

export type Variant = "html" | "markdown" | "not-acceptable";

interface AcceptEntry {
  type: string;
  subtype: string;
  q: number;
}

/** Media ranges this site can produce, in server-preference order. */
const PRODUCIBLE = [
  { type: "text", subtype: "html", variant: "html" },
  { type: "text", subtype: "markdown", variant: "markdown" },
] as const;

/**
 * Parses an Accept header into typed entries with quality factors.
 * Malformed entries are dropped; malformed q values fall back to 1.
 */
export function parseAccept(header: string): AcceptEntry[] {
  const entries: AcceptEntry[] = [];

  for (const rawEntry of header.split(",")) {
    const parts = rawEntry.split(";").map((part) => part.trim());
    const mediaRange = parts[0]?.toLowerCase() ?? "";
    const segments = mediaRange.split("/");

    if (segments.length !== 2 || !segments[0] || !segments[1]) continue;

    const [type, subtype] = segments;
    let q = 1;

    for (const rawParam of parts.slice(1)) {
      const eq = rawParam.indexOf("=");
      if (eq === -1) continue;
      const name = rawParam.slice(0, eq).trim().toLowerCase();
      if (name !== "q") continue;
      const parsed = Number.parseFloat(rawParam.slice(eq + 1).trim());
      if (Number.isNaN(parsed)) continue;
      q = Math.min(1, Math.max(0, parsed));
    }

    entries.push({ type, subtype, q });
  }

  return entries;
}

function specificity(entry: AcceptEntry, type: string, subtype: string): number {
  if (entry.type === type && entry.subtype === subtype) return 3;
  if (entry.type === type && entry.subtype === "*") return 2;
  if (entry.type === "*" && entry.subtype === "*") return 1;
  return 0;
}

function scoreCandidate(
  entries: AcceptEntry[],
  type: string,
  subtype: string,
): number {
  let bestRank = 0;
  let bestQ = 0;

  for (const entry of entries) {
    const rank = specificity(entry, type, subtype);
    if (rank === 0) continue;
    if (rank > bestRank) {
      bestRank = rank;
      bestQ = entry.q;
    } else if (rank === bestRank) {
      bestQ = Math.max(bestQ, entry.q);
    }
  }

  return bestQ;
}

/**
 * Decides which representation to serve for a request.
 * A missing (or empty) Accept header means "no constraint": serve the
 * HTML default. A lone wildcard behaves the same way via tie-breaking.
 */
export function negotiate(
  acceptHeader: string | null | undefined,
): Variant {
  if (acceptHeader === null || acceptHeader === undefined) return "html";
  if (acceptHeader.trim() === "") return "html";

  const entries = parseAccept(acceptHeader);
  if (entries.length === 0) return "html";

  let bestVariant: Variant = "html";
  let bestScore = 0;

  for (const candidate of PRODUCIBLE) {
    const score = scoreCandidate(entries, candidate.type, candidate.subtype);
    if (score > bestScore) {
      bestScore = score;
      bestVariant = candidate.variant;
    }
  }

  if (bestScore <= 0) return "not-acceptable";
  return bestVariant;
}
