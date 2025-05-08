function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function multiPermutation(n, r) {
  return Math.pow(n, r);
}

function multiCombination(n, r) {
  return combination(n + r - 1, r);
}


const n = 8;
const r = 3;

console.log(`n = ${n}, r = ${r}`)
console.log(`Permutation: ${permutation(n, r)}`);
console.log(`Combination: ${combination(n, r)}`);
console.log(`Multi Permutation: ${multiPermutation(n, r)}`);
console.log(`Multi Combination: ${multiCombination(n, r)}`);

