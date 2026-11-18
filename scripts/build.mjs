// Copies the static deck files into dist/ for publishing.
import { cp, mkdir, rm } from 'node:fs/promises';
const files = ['index.html', 'prompts.md', 'sample-orders.csv', 'assets'];
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const f of files) await cp(f, `dist/${f}`, { recursive: true });
console.log('Built dist/');
