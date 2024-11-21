/*

Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(arr, ln) {
  if (arr.length < ln) return null

  let maxSum = 0
  for (let i = 0; i < ln; i++) {
    maxSum = maxSum + arr[i]
  }

  let tempSum = maxSum
  for (let i = ln; i < arr.length; i++) {
    tempSum = tempSum - arr[i - ln] + arr[i]
    if (tempSum > maxSum) maxSum = tempSum
  }

  return maxSum
}

// =============================================================================================================

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters:
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray
of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(arr, n) {
  let minLength = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return 1
    } else if (sum < n) {
      sum += arr[i]
      minLength++
    }
  }

  if (sum < n) return 0

  let i = 1
  let j = minLength - 1

  while (j < arr.length) {
    if (sum - arr[i - 1] >= n) {
      minLength = Math.min(minLength, j - i + 1)
      sum = sum - arr[i - 1]
      i++
    } else {
      j++
      sum = sum - arr[i - 1] + arr[j]
      i++
    }
  }

  return minLength
}

// =============================================================================================================

/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring,
which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (seen[char]) {
      start = Math.max(start, seen[char])
    }

    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}
