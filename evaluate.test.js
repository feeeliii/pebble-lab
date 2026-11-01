import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countCorrect, chanceOfAtLeast } from './evaluate.js';

test('counts trials where the answer matches what was played', () => {
  const trials = [
    { played: 'forward', answer: 'forward' },
    { played: 'backward', answer: 'forward' },
    { played: 'backward', answer: 'backward' },
  ];
  assert.equal(countCorrect(trials), 2);
});

test('getting at least 0 right is certain', () => {
  assert.equal(chanceOfAtLeast(0, 20), 1);
});

test('15 of 20 is unlikely by guessing, 14 of 20 is not', () => {
  assert.ok(chanceOfAtLeast(15, 20) < 0.05);
  assert.ok(chanceOfAtLeast(14, 20) > 0.05);
});