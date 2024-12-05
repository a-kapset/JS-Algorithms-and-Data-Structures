/**
in MaxBinaryHeap:
1) parent is always greater then its children
2) each child has index '2n + 1' or '2n + 2', where n is parent's index
 */

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value)
    this._bubbleUp()
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = end
      this._bubbleDown()
    }
    return max
  }

  _bubbleUp() {
    let index = this.values.length - 1
    const elementToBubbleUp = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (elementToBubbleUp <= parent) break
      this.values[parentIndex] = elementToBubbleUp
      this.values[index] = parent
      index = parentIndex
    }
  }

  _bubbleDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let toSwap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) toSwap = leftChildIndex
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if ((toSwap === null && rightChild > element) || (toSwap !== null && rightChild > leftChild))
          toSwap = rightChildIndex
      }

      if (toSwap === null) break

      this.values[index] = this.values[toSwap]
      this.values[toSwap] = element
      index = toSwap
    }
  }
}

const maxbh = new MaxBinaryHeap()
// [55 39 41 18 27 12 33]
//  0  1  2  3  4  5  6

maxbh.insert(41)
maxbh.insert(39)
maxbh.insert(33)
maxbh.insert(18)
maxbh.insert(27)
maxbh.insert(12)
maxbh.insert(55)