import { test } from 'node:test';
import assert from 'node:assert/strict';
import { oneCycle, signal } from './waveform.js';

test('one cycle sums to zero (no net force)', () => {
  const samples = oneCycle(200, 0);
  const sum = samples.reduce((total, value) => total + value, 0);
  assert.ok(Math.abs(sum) < 1e-9);
});

test('signal has one sample per tick of the sample rate', () => {
  const samples = signal(65, 0, 2, 44100);
  assert.equal(samples.length, 88200);
});