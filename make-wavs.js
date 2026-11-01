import { writeFileSync } from 'node:fs';
import { signal, normalize } from './waveform.js';
import { toWav } from './wav.js';

const SAMPLE_RATE = 44100;
const FREQUENCY = 65;
const SECONDS = 5;

function writePullFile(fileName, phase) {
  const samples = normalize(signal(FREQUENCY, phase, SECONDS, SAMPLE_RATE));
  writeFileSync(fileName, toWav(samples, SAMPLE_RATE));
  console.log(`wrote ${fileName}`);
}

writePullFile('forward-65hz.wav', 0);
writePullFile('backward-65hz.wav', Math.PI);