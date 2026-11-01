export function pullValue(x, phase, harmonic = 0.5) {
  return Math.sin(x) + harmonic * Math.sin(2 * x + phase);
}

export function oneCycle(samplesPerCycle, phase) {
  const samples = [];
  for (let i = 0; i < samplesPerCycle; i++) {
    const x = (2 * Math.PI * i) / samplesPerCycle;
    samples.push(pullValue(x, phase));
  }
  return samples;
}

export function signal(frequency, phase, seconds, sampleRate, harmonic = 0.5) {
  const samples = [];
  const total = Math.round(seconds * sampleRate);
  for (let i = 0; i < total; i++) {
    const t = i / sampleRate;
    samples.push(pullValue(2 * Math.PI * frequency * t, phase, harmonic));
  }
  return samples;
}

export function normalize(samples) {
  const peak = samples.reduce((max, value) => Math.max(max, Math.abs(value)), 0);
  if (peak === 0) return samples;
  return samples.map((value) => value / peak);
}