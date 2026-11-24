// Dad Joke Showdown — make.fun entry
// Writes a single dad joke (at most 200 characters) to /output/entry.txt.
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I started a band called 1023 Megabytes. We never got a gig.";

// Gate guard: the entry must be 1–200 characters, not whitespace-only.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${JOKE.length} chars, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
