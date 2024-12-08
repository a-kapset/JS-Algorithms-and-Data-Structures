// this is simplified version of Graph - no handling errors/invalid vertices

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  dfsRecursively(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor)
      })
    }

    dfs(start)

    return result
  }

  dfsIteratively(start) {
    const stack = [start]
    const result = []
    const visited = {}
    visited[start] = true
    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  bfsIteratively(start) {
    const queue = [start]
    const result = []
    const visited = {}
    visited[start] = true
    let currentVertex

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

//         A
//       /   \
//      B     C
//      |     |
//      D --- E
//       \   /
//         F

const gr = new Graph()

gr.addVertex('A')
gr.addVertex('B')
gr.addVertex('C')
gr.addVertex('D')
gr.addVertex('E')
gr.addVertex('F')
gr.addEdge('A', 'B')
gr.addEdge('A', 'C')
gr.addEdge('B', 'D')
gr.addEdge('C', 'E')
gr.addEdge('D', 'E')
gr.addEdge('D', 'F')
gr.addEdge('E', 'F')

console.log(gr.bfsIteratively('A'))
