// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The deliverable for this bounty is the X post itself; this program's only
// job is to hand POST.json to the grader. Before copying, it parses the file
// and checks it really is an object carrying a string `url`, so a malformed
// POST.json fails loudly here instead of being refused silently at the gate.
//
// Paths: in the grader the repo sits at /bot and output goes to /output.
// Locally, MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for those:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourcePath = join(repoDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}');
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  fail('POST.json must carry a non-empty string "url" naming the X post');
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(sourcePath, join(outDir, 'POST.json'));
} catch (err) {
  fail(`could not copy POST.json into ${outDir}: ${(err as Error).message}`);
}

console.log(`copied POST.json for ${url}`);
