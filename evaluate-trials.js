import { readFileSync } from 'node:fs';
import { countCorrect, chanceOfAtLeast } from './evaluate.js';

const lines = readFileSync('trial-sheet.csv', 'utf8').trim().split(/\r?\n/).slice(1);
const trials = lines.map((line) => {
  const [, played, answer] = line.split(',');
  return { played, answer: answer.trim() };
});

const correct = countCorrect(trials);
const chance = chanceOfAtLeast(correct, trials.length);
console.log(`${correct} of ${trials.length} correct`);
console.log(`chance of this by guessing: ${(chance * 100).toFixed(1)} %`);