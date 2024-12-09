function getFibonacci(n) {
  if (n <= 2) return 1
  return getFibonacci(n - 1) + getFibonacci(n - 2)
} // O(2^n) time complexity

// add memoization
function getFibonacciMemo(n, memo = []) {
  if (memo[n]) return memo[n]
  if (n <= 2) return 1
  let res = getFibonacciMemo(n - 1, memo) + getFibonacciMemo(n - 2, memo)
  memo[n] = res
  return res
} // O(n) time complexity

// add tabulation
function getFibonacciTabulated(n) {
  if (n <= 2) return 1
  const fibNums = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }

  return fibNums[n]
} // O(n) time complexity
