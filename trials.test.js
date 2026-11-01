import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeTrialPlan } from './trials.js';

test('plan has equal numbers of forward and backward trials', () => {
  const plan = makeTrialPlan(20);
  const forwards = plan.filter((entry) => entry === 'forward').length;
  assert.equal(plan.length, 20);
  assert.equal(forwards, 10);
});

test('plan is reproducible when the randomness is fixed', () => {
  const alwaysZero = () => 0;
  assert.deepEqual(makeTrialPlan(4, alwaysZero), ['forward', 'backward', 'backward', 'forward']);
});