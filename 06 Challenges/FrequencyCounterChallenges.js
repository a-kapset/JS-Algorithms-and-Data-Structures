/*
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2) {
  const str1 = num1.toString()
  const str2 = num2.toString()

  if (str1.length !== str2.length) return false

  const str1_storage = {}

  for (const ch of str1) {
    str1_storage[ch] = (str1_storage[ch] || 0) + 1
  }

  for (const ch of str2) {
    if (str1_storage[ch]) {
      str1_storage[ch]--
    } else {
      return false
    }
  }

  return true
}

// =============================================================================================================

/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)
*/

function areThereDuplicates(...args) {
  const storage = {}

  for (const ch of args) {
    storage[ch] = (storage[ch] || 0) + 1
    if (storage[ch] > 1) return true
  }

  return false
}

// =============================================================================================================
