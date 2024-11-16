/*
Write a function called isSame, which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the isSame.
isSame([1,2,3], [4,1,9]) // true
isSame([1,2,3], [1,9]) // false
isSame([1,2,1], [4,4,1]) // false (must be isSame frequency)
*/
function isSame(arr1, arr2) {
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

/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
isValidAnagram('', '') // true
isValidAnagram('aaz', 'zza') // false
isValidAnagram('anagram', 'nagaram') // true
isValidAnagram('rat', 'car') // false
isValidAnagram('awesome', 'awesom') // false
isValidAnagram('qwerty', 'qeywrt') // true
isValidAnagram('texttwisttime', 'timetwisttext') // true
*/
function isValidAnagram(str1, str2) {
  if (str1.length != str2.length) return false

  const firstStringStorage = {}
  const secondStringStorage = {}

  for (const s of str1) {
    firstStringStorage[s] = (firstStringStorage[s] || 0) + 1
  }

  for (const s of str2) {
    secondStringStorage[s] = (secondStringStorage[s] || 0) + 1
  }

  for (const key in firstStringStorage) {
    if (!(key in secondStringStorage)) return false
    if (firstStringStorage[key] !== secondStringStorage[key]) return false
  }

  return true
}

console.log(isValidAnagram('', ''))
console.log(isValidAnagram('aaz', 'zza'))
console.log(isValidAnagram('anagram', 'nagaram'))
console.log(isValidAnagram('rat', 'car'))
console.log(isValidAnagram('awesome', 'awesom'))
console.log(isValidAnagram('qwerty', 'qeywrt'))
console.log(isValidAnagram('texttwisttime', 'timetwisttext'))
