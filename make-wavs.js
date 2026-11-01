import { writeFileSync } from 'node:fs';
import { signal, normalize } from './waveform.js';
import { toWav } from './wav.js';

const SAMPLE_RATE = 44100;
const FREQUENCY = 65;
const SECONDS = 5;

function writeWaveFile(fileName, phase, harmonic) {
  const samples = normalize(signal(FREQUENCY, phase, SECONDS, SAMPLE_RATE, harmonic));
  writeFileSync(fileName, toWav(samples, SAMPLE_RATE));
  console.log(`wrote ${fileName}`);
}

writeWaveFile('forward-65hz.wav', 0, 0.5);
writeWaveFile('backward-65hz.wav', Math.PI, 0.5);
writeWaveFile('buzz-65hz.wav', 0, 0);