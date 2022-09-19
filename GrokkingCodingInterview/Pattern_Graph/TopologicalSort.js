/*
Time Complexity: O(V + E)
Space Complexity:O(V+E)
*/
const topological_sort = function (vertices, edges) {
    let sortedOrder = [];
    let graph = new Array(vertices).fill(0).map(() => Array());
    let inDegrees = new Array(vertices).fill(0);
    let sources = [];

    //1. Put children into parents indexes (graph) & increase # of incoming direction for children (inDegrees)
    edges.forEach((edge) =>{
        let parent = edge[0];
        let child = edge[1];
        graph[parent].push(child);
        inDegrees[child]++;
    });
    //console.log(inDegrees)
    //2 Get all the sources(no incoming) from inDegreess
    for(let i = 0; i < inDegrees.length; i++){
        if(inDegrees[i] === 0){
            sources.push(i);
        }
    }
    //console.log(sources)
    //Push into the sorted array. From sources (do like BFS) and decrease the inDegrees.
    //Once the child has no more incoming direction.It will become a source -> Push it into SOurces

    while(sources.length > 0){
        let vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((node) => {
            inDegrees[node]-=1;
            if(inDegrees[node] === 0){
                sources.push(node);
            }
        })
    }
    
    if(sortedOrder.length !== vertices){
        return [];
    }
    return sortedOrder;
};

console.log(
    `Topological sort: ${topological_sort(4, [
        [3, 2],
        [3, 0],
        [2, 0],
        [2, 1],
    ])}`
);
console.log(
    `Topological sort: ${topological_sort(5, [
        [4, 2],
        [4, 3],
        [2, 0],
        [2, 1],
        [3, 1],
    ])}`
);
console.log(
    `Topological sort: ${topological_sort(7, [
        [6, 4],
        [6, 2],
        [5, 3],
        [5, 4],
        [3, 0],
        [3, 1],
        [3, 2],
        [4, 1],
    ])}`
);
