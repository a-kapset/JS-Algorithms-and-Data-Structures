class NODE {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new NODE(val)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return this
  }

  pop() {
    if (!this.head) return undefined

    const poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }

    this.length--

    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined

    const shiftedNode = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }

    this.length--

    return shiftedNode
  }

  unshift(val) {
    const newNode = new NODE(val)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let count, current
    if (index <= this.length / 2) {
      count = 0
      current = this.head

      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail

      while (count !== index) {
        current = current.prev
        count--
      }
    }

    return current
  }

  set(index, value) {
    const setNode = this.get(index)

    if (setNode) {
      setNode.val = value
      return true
    } else {
      return false
    }
  }
}

const dll = new DoublyLinkedLists()
dll.push('A')
dll.push('B')
dll.push('C')
dll.push('D')
dll.push('E')

console.log(dll.set(2, 'X'))
console.log(dll.set(-1, 'X'))
console.log(dll.set(dll.length, 'X'))
