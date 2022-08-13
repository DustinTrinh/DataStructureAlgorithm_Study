//https://cs.slides.com/colt_steele/graphs
//Linked list is linear connection type of thing. Graph can connect with any other nodes.
//Vertex: Node
//Edge: Connection btw nodes
//Undirected Graph: 2 ways connection, no specific direction determine at Edge
//Directed Graph: Has direction, not 2 ways.
//UNweighted Graph: no value to the edges
//Weighted graph: Edges have values to it

//Depth: Move as far from root as possible
//Breadth: Visit root's neighboors first and then move on

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v1].filter(
            v => v !== v1
        );
    }

    removeVertex(v){
        if(!this.adjacencyList[v]) return null;

        while(this.adjacencyList[v].length){
            const adjacentVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, adjacentVertex);
        }
        delete this.adjacencyList[v];
    }
    //depth first search Recursive
    dfs_recursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })

        })(start)
        return result;
    }

    //Depth First search iterative
    dfs_iterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    breadthFirstSearch(start){
        let queue = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.dfs_recursive("A"));
console.log(g.dfs_iterative("A"));
console.log(g.breadthFirstSearch("A"));