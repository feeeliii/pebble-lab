import { writeFileSync } from 'node:fs';
import { makeTrialPlan } from './trials.js';

const plan = makeTrialPlan(20);
const rows = plan.map((file, i) => `${i + 1},${file},`);
writeFileSync('trial-sheet.csv', ['trial,played,answer', ...rows].join('\n'));
console.log('wrote trial-sheet.csv');