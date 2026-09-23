import { mkdirSync, copyFileSync } from 'node:fs';
const routes=['services','industries','about','approach','contact'];
for (const route of routes){ mkdirSync(`dist/${route}`,{recursive:true}); copyFileSync('dist/index.html',`dist/${route}/index.html`); }
