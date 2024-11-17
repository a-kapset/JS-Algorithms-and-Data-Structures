/*
Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function is located.
If the value is not found, return -1.
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
*/
function search(arr, val) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)

    if (val > arr[middle]) {
      start = middle + 1
    } else if (val < arr[middle]) {
      end = middle - 1
    } else {
      return middle
    }
  }

  return -1
}
