// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  const frequencyObj1 = {}
  const frequencyObj2 = {}

  for (const el of arr1) {
    frequencyObj1[el] = (frequencyObj1[el] || 0) + 1
  }

  for (const el of arr2) {
    frequencyObj2[el] = (frequencyObj2[el] || 0) + 1
  }

  for (const key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) return false
    if (frequencyObj1[key] !== frequencyObj2[key ** 2]) return false
  }

  return true
}
