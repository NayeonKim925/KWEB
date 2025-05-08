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

module.exports = {
  permutation,
  combination,
  multiPermutation,
  multiCombination
};
