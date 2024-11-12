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
}

const sll = new SinglyLinkedList()
console.log('>>> ', sll)
sll.push('HI')
console.log('>>> ', sll)
sll.push('HOW')
console.log('>>> ', sll)
sll.push('ARE')
console.log('>>> ', sll)
sll.push('YOU')
