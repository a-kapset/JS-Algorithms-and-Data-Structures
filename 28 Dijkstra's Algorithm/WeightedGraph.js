// simple priority queue for weighted graph
class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    this.values.push({ value, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  searchByDijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest

    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }

      previous[vertex] = null
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      const nodes = new PriorityQueue()
      const distances = {}
      const previous = {}
      let path = [] // to return at end
      let smallest

      // build up initial state
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0
          nodes.enqueue(vertex, 0)
        } else {
          distances[vertex] = Infinity
          nodes.enqueue(vertex, Infinity)
        }
        previous[vertex] = null
      }

      // as long as there is something to visit
      while (nodes.values.length) {
        smallest = nodes.dequeue().val
        if (smallest === finish) {
          //WE ARE DONE
          //BUILD UP PATH TO RETURN AT END
          while (previous[smallest]) {
            path.push(smallest)
            smallest = previous[smallest]
          }
          break
        }
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in this.adjacencyList[smallest]) {
            //find neighboring node
            let nextNode = this.adjacencyList[smallest][neighbor]
            //calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight
            let nextNeighbor = nextNode.node

            if (candidate < distances[nextNeighbor]) {
              //updating new smallest distance to neighbor
              distances[nextNeighbor] = candidate
              //updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest
              //enqueue in priority queue with new priority
              nodes.enqueue(nextNeighbor, candidate)
            }
          }
        }
      }
      return path.concat(smallest).reverse()
    }
  }
}

const wg = new WeightedGraph()

wg.addVertex('A')
wg.addVertex('B')
wg.addVertex('C')
wg.addVertex('D')
wg.addVertex('E')
wg.addVertex('F')

wg.addEdge('A', 'B', 4)
wg.addEdge('A', 'C', 2)
wg.addEdge('B', 'E', 3)
wg.addEdge('C', 'D', 2)
wg.addEdge('C', 'F', 4)
wg.addEdge('D', 'E', 3)
wg.addEdge('D', 'F', 1)
wg.addEdge('E', 'F', 1)

console.log(wg.searchByDijkstra('A', 'E'))
