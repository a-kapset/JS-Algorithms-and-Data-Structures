/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/
function sumZero(arr) {
  let i = 0
  let j = arr.length - 1

  while (i !== j) {
    if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
    if (arr[i] + arr[j] < 0) i++
    if (arr[i] + arr[j] > 0) j--
  }
}

/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  if (arr.length === 1) return 1

  let i = 0
  let j = 1
  let counter = 1

  while (j < arr.length) {
    if (arr[j] !== arr[i]) {
      counter++
      i = j
    }

    j++
  }

  return counter
}
