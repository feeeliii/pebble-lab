export function countCorrect(trials) {
  return trials.filter((trial) => trial.played === trial.answer).length;
}

export function chanceOfAtLeast(correct, total) {
  let sum = 0;
  for (let k = correct; k <= total; k++) {
    sum += waysToChoose(total, k);
  }
  return sum / 2 ** total;
}

function waysToChoose(n, k) {
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - k + i)) / i;
  }
  return result;
}