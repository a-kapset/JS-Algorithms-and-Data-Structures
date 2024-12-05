class NODE {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    const newNode = new NODE(val, priority)
    this.values.push(newNode)

    this._bubbleUp()
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = end
      this._bubbleDown()
    }

    return min
  }

  _bubbleUp() {
    let index = this.values.length - 1
    const elementToBubbleUp = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (elementToBubbleUp.priority >= parent.priority) break
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
        if (leftChild.priority < element.priority) toSwap = leftChildIndex
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (toSwap === null && rightChild.priority < element.priority) ||
          (toSwap !== null && rightChild.priority < leftChild.priority)
        )
          toSwap = rightChildIndex
      }

      if (toSwap === null) break

      this.values[index] = this.values[toSwap]
      this.values[toSwap] = element
      index = toSwap
    }
  }
}

const pq = new PriorityQueue()

pq.enqueue('a', 1)
pq.enqueue('b', 2)
pq.enqueue('c', 3)
pq.enqueue('e', 1)

console.log(pq)
