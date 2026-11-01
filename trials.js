export function makeTrialPlan(count, random = Math.random) {
  const plan = [];
  for (let i = 0; i < count; i++) {
    plan.push(i < count / 2 ? 'forward' : 'backward');
  }
  for (let i = plan.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [plan[i], plan[j]] = [plan[j], plan[i]];
  }
  return plan;
}