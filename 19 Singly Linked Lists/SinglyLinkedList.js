// node contains pieceof data - 'val'
// node contains reference to next node - 'next'
class NODE {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// let first = new NODE('hi')
// first.next = new NODE('there')
// first.next.next = new NODE('how')
// first.next.next.next = new NODE('are')
// first.next.next.next.next = new NODE('you')
// console.log(first.next.next.next.next)

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.lenght = 0
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

    this.lenght++

    return this
  }

  traverse() {
    let current = this.head

    while (current) {
      console.log(current)
      current = current.next
    }
  }

  pop() {
    if (!this.head) {
      return undefined
    }

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null

    this.lenght--

    if (this.lenght === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }
}

const sll = new SinglyLinkedList()
sll.push('HI')
sll.push('HOW')
sll.push('ARE')
sll.push('YOU')
sll.pop()
sll.pop()
sll.pop()
sll.pop()
sll.pop()
