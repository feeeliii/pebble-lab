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