// NODE contains piece of data - 'val'
// NODE contains reference to next node - 'next'
class NODE {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new NODE(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++

    return this
  }

  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) return undefined

    let currentHead = this.head
    this.head = currentHead.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return currentHead
  }

  unshift(val) {
    const newNode = new NODE(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let counter = 0
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  set(index, value) {
    let foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = value
      return true
    } else {
      return false
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    let prevNode = this.get(index - 1)
    let tempNext = prevNode.next
    let newNode = new NODE(value)
    prevNode.next = newNode
    newNode.next = tempNext
    this.length++

    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift(index)
    if (index === this.length - 1) return this.pop(index)

    let prevNode = this.get(index - 1)
    let removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--

    return removedNode
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null

    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }
}

const sll = new SinglyLinkedList()
sll.push('HI')
sll.push('HOW')
sll.push('ARE')
sll.push('YOU')
