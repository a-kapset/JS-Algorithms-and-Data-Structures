// num = 3 -> 3 2 1 Done!
function countDown(num) {
  if (num <= 0) {
    console.log('Done!')
    return
  }

  console.log(num)
  num--
  countDown(num)
}

// num = 4 -> return 10 (4 + 3 + 2 + 1)
function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

// num = 5 -> return 120 (5 x 4 x 3 x 2 x 1)
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

// 'helper method recursion' approach
function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])
    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}

// 'pure recursion' -> alternative for 'helper method recursion'
function collectOddValues2(arr) {
  let result = []
  if (arr.length === 0) return result
  if (arr[0] % 2 !== 0) result.push(arr[0])
  result = result.concat(collectOddValues2(arr.slice(1)))

  return result
}