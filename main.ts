import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT = "/output/entry.txt";

const TEXT = "I asked my smart speaker for the meaning of life. It said, 'Playing: Never Gonna Give You Up.'";

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
