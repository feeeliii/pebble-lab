import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toWav } from './wav.js';

test('wav file has a 44-byte header plus 2 bytes per sample', () => {
  const wav = toWav([0, 0.5, -1], 44100);
  assert.equal(wav.length, 44 + 3 * 2);
});

test('wav file starts with the RIFF and WAVE markers', () => {
  const wav = toWav([0], 44100);
  assert.equal(wav.toString('ascii', 0, 4), 'RIFF');
  assert.equal(wav.toString('ascii', 8, 12), 'WAVE');
});

test('a sample of 1 is stored as the largest 16-bit value', () => {
  const wav = toWav([1], 44100);
  assert.equal(wav.readInt16LE(44), 32767);
});