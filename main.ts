// dev-excuses-judge — Make the AI Judge Laugh: Developer Excuses
//
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt (gate: 1-200 UTF-8 characters).
// Runs on Node 22+ with no dependencies and no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a deploy that passed every test, because the person who
// wrote the tests is the same person who wrote the bug. Self-own, one
// line, and every developer who has ever shipped on a Friday recognises it.
const excuse =
  "The deploy passed every test, because the tests were written by the same person who wrote the bug: me.";

mkdirSync("/output", { recursive: true });

// Fail loudly instead of shipping an entry the gate would refuse.
if ([...excuse].length < 1 || [...excuse].length > 200) {
  throw new Error(`Excuse is ${[...excuse].length} characters; gate needs 1-200.`);
}
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`Wrote ${excuse.length} characters to /output/entry.txt`);
