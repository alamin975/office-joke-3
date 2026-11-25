import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Our sprint planning is just everyone agreeing the work is impossible, then committing to it anyway.";

// writeEntry: writes the single one-line office joke to /output/entry.txt
// as UTF-8 with no trailing newline, per the gate (1-200 chars).
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

function main(): void {
  writeEntry(ENTRY);
}

main();
