class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    let list = this.adjacencyList;
    if(list[vertex1] && list[vertex2] && !list[vertex2].includes(vertex1) && !list[vertex2].includes(vertex1)) {
        list[vertex1].push(vertex2);
        list[vertex2].push(vertex1);
      }
   }
  removeEdge(vertex1, vertex2) {
    let list = this.adjacencyList;
    if(list[vertex1] && list[vertex2] && list[vertex2].includes(vertex1) && list[vertex2].includes(vertex1)) {
        list[vertex1] = list[vertex1].filter(v => v !== vertex2);
        list[vertex2] = list[vertex2].filter(v => v !== vertex1);
    }
  }
  removeVertex(vertex) {
    let list = this.adjacencyList;
    if(list[vertex]) {
      while(list[vertex].length) {
        const adjacentVertex = list[vertex].pop();
        this.removeEdge(vertex, adjacentVertex)
      }
      delete list[vertex];
    }
  }
  // recursive way
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    (function dfs(vertex) {
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  } 
  // iterative way 
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    
    visited[start] = true;
    while(stack.length) {
      //console.log(stack)
      currentVertex = stack.pop();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    
    while(queue.length) {
     currentVertex = queue.shift();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }
    return result;
  }
}

let g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.breadthFirst('A'))
//console.log(g.depthFirstRecursive('A'))

//         A
//      /     \
//     B       C
//     |       |
//     D ----- E
//      \     /
//         F
