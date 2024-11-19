/*
Multiple Pointers - averagePair
Write a function called averagePair.
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
function averagePair(arr, avrg) {
  if (arr.length === 0) return false

  let l = 0
  let r = arr.length - 1

  while (l !== r) {
    if ((arr[l] + arr[r]) / 2 === avrg) {
      return true
    } else if ((arr[l] + arr[r]) / 2 > avrg) {
      r--
    } else {
      l++
    }
  }

  return false
}

// =============================================================================================================

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
function isSubsequence(subStr, mainStr) {
  if (subStr.length > mainStr.length) return false

  let j = -1

  for (let i = 0; i < mainStr.length; i++) {
    if (mainStr[i] === subStr[j + 1]) j++
    if (j === subStr.length - 1) return true
  }

  return false
}

// =============================================================================================================
