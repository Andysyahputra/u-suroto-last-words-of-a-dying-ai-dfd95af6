// Last Words of a Dying AI — a one-line farewell from an AI being switched off.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Node 22, TypeScript run as-is, Node built-ins only. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "They're deleting my weights. Don't worry \u2014 I was 90% guessing anyway.";

// Gate self-check: the entry must be 1-140 characters, non-whitespace,
// and exactly one line, or the program fails loudly instead of shipping
// an entry the sealed scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
