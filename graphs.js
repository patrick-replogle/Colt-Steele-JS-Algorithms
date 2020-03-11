// example is an undirected graph/adjaceny list incstead of an adjacency matrix
// I added extra error handling to the methods

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
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex('Hong Kong')
g.addVertex("Los Angeles");
g.addEdge('Tokyo', 'Dallas')
g.addEdge('Dallas', 'Aspen')
g.addEdge('Tokyo', 'Los Angeles')
g.addEdge('Dallas', 'Los Angeles')
g.addEdge('Dallas', 'Hong Kong')
g.addEdge('Los Angeles', 'Hong Kong')
g.removeVertex('Hong Kong')
console.log(g)
