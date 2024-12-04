class NODE {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new NODE(value)

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        } else return this // when (value === current.value)
      }
    }
  }

  contains(value) {
    if (!this.root) return false

    let current = this.root
    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else found = true // when (value === current.value)
    }

    return found
  }

  breadthFirstSearch() {
    const data = []
    const queue = []
    let node = this.root
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

  depthFirstPreOrderSearch() {
    const data = []

    function traverse(node) {
      data.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return data
  }

  depthFirstPostOrderSearch() {
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node)
    }

    traverse(this.root)

    return data
  }

  depthFirstInOrderSearch() {
    const data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return data
  }
}

//        10
//    8       12
//  7   9   11  15

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(12)
bst.insert(7)
bst.insert(9)
bst.insert(11)
bst.insert(15)
