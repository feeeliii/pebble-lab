import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pullValue, oneCycle, signal, normalize } from './waveform.js';

test('one cycle sums to zero (no net force)', () => {
  const samples = oneCycle(200, 0);
  const sum = samples.reduce((total, value) => total + value, 0);
  assert.ok(Math.abs(sum) < 1e-9);
});

test('signal has one sample per tick of the sample rate', () => {
  const samples = signal(65, 0, 2, 44100);
  assert.equal(samples.length, 88200);
});

test('normalize scales the largest value to 1', () => {
  assert.deepEqual(normalize([0.5, -2, 1]), [0.25, -1, 0.5]);
});

test('normalize leaves silence unchanged', () => {
  assert.deepEqual(normalize([0, 0]), [0, 0]);
});

test('without the harmonic the wave is a plain sine (symmetric buzz)', () => {
  assert.equal(pullValue(1, 0, 0), Math.sin(1));
});