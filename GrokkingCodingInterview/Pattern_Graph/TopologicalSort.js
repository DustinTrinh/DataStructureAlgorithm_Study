const topological_sort = function (vertices, edges) {
    let sortedOrder = [];
    let graph = new Array(vertices).fill(0).map(() => Array());
    let incomingDirection = new Array(vertices).fill(0);
    let sources = [];

    //1. Put children into parents indexes (graph) & increase # of incoming direction for children (incomingDirection)
    edges.forEach((edge) =>{
        let parent = edge[0];
        let child = edge[1];
        graph[parent].push(child);
        incomingDirection[child]++;
    });
    //console.log(incomingDirection)
    //2 Get all the sources(no incoming) from incomingDirections
    for(let i = 0; i < incomingDirection.length; i++){
        if(incomingDirection[i] === 0){
            sources.push(i);
        }
    }
    //console.log(sources)
    //Push into the sorted array. From sources (do like BFS) and decrease the incomingDirection.
    //Once the child has no more incoming direction.It will become a source -> Push it into SOurces

    while(sources.length > 0){
        let vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((node) => {
            incomingDirection[node]-=1;
            if(incomingDirection[node] === 0){
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
