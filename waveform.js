export function oneCycle(samplesPerCycle, phase) {
  const samples = [];
  for (let i = 0; i < samplesPerCycle; i++) {
    const x = (2 * Math.PI * i) / samplesPerCycle;
    samples.push(Math.sin(x) + 0.5 * Math.sin(2 * x + phase));
  }
  return samples;
}