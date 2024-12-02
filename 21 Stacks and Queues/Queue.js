class NODE {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // push
  enqueue(value) {
    const newNode = new NODE(value)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  // remove
  dequeue() {
    if (!this.first) return null

    const temp = this.first

    if (this.first === this.last) this.last = null

    this.first = this.first.next
    this.size--

    return temp.value
  }
}
