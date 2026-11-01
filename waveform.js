export function pullValue(x, phase) {
  return Math.sin(x) + 0.5 * Math.sin(2 * x + phase);
}

export function oneCycle(samplesPerCycle, phase) {
  const samples = [];
  for (let i = 0; i < samplesPerCycle; i++) {
    const x = (2 * Math.PI * i) / samplesPerCycle;
    samples.push(pullValue(x, phase));
  }
  return samples;
}

export function signal(frequency, phase, seconds, sampleRate) {
  const samples = [];
  const total = Math.round(seconds * sampleRate);
  for (let i = 0; i < total; i++) {
    const t = i / sampleRate;
    samples.push(pullValue(2 * Math.PI * frequency * t, phase));
  }
  return samples;
}