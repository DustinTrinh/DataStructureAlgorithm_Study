class Graph {
    // constructor
    constructor(vertices = 0) {
        this.graph = new Map();
        this.vertices = vertices;
    }

    addEdge(u, v) {
        if (this.graph.has(u)) {
            this.graph.get(u).push(v);
        } else {
            this.graph.set(u, []);
            this.graph.get(u).push(v);
        }
    }
}

function helperFunction(testVariable, currentNode, visited, result) {
    visited[currentNode] = true; // Mark the current node as visited

    if (testVariable.graph.has(currentNode) == true) {
        var currentAdjacencyList = testVariable.graph.get(currentNode);
        for (var i = 0; i < currentAdjacencyList.length; i++) {
            var temp = currentAdjacencyList[i];
            if (visited[temp] == false) {
                // Recur for all the adjacent unvisited vertices of currentNode
                helperFunction(testVariable, temp, visited, result);
            }
        }
    }
    result.unshift(currentNode); // Push current vertex to result in the beginning of the array
}

function topologicalSort(testVariable) {
    var visited = new Array(testVariable.vertices).fill(false); // Mark all the vertices as not visited
    var result = []; // stack to store the result/output

    for (
        var currentNode = 0;
        currentNode < testVariable.vertices;
        currentNode++
    ) {
        if (visited[currentNode] == false) {
            helperFunction(testVariable, currentNode, visited, result);
        }
    }
    return result;
}

// Driver code
myGraph = new Graph(5);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 3);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);

console.log("Topological Sort: " + topologicalSort(myGraph));
