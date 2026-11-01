import { test } from 'node:test';
import assert from 'node:assert/strict';
import { oneCycle } from './waveform.js';

test('one cycle sums to zero (no net force)', () => {
  const samples = oneCycle(200, 0);
  const sum = samples.reduce((total, value) => total + value, 0);
  assert.ok(Math.abs(sum) < 1e-9);
});