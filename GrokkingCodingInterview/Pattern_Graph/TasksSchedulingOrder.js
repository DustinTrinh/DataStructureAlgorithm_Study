const find_order = function (tasks, prerequisites) {
    let sortedOrder = [];
    let sources = [];
    let indegrees = new Array(tasks).fill(0);
    let graph = new Array(tasks).fill(0).map(() => Array());

    //make graph
    prerequisites.forEach((preq) => {
        let parent = preq[0];
        let child = preq[1];

        graph[parent].push(child);
        indegrees[child]++;
    });

    //count sources
    for(let i = 0 ; i < indegrees.length; i++){
        if(indegrees[i] === 0 ){
            sources.push(i);
        }
    }

    //order
    while(sources.length > 0){
        let vertex = sources.shift();
        sortedOrder.push(vertex);

        graph[vertex].forEach((child) =>{
            indegrees[child]--;
            if(indegrees[child] === 0){
                sources.push(child);
            }
        })
    }

    if(sortedOrder.length !== tasks){
        return [];
    }

    return sortedOrder;
};

console.log(
    `Is scheduling possible: ${find_order(3, [
        [0, 1],
        [1, 2],
    ])}`
);
console.log(
    `Is scheduling possible: ${find_order(3, [
        [0, 1],
        [1, 2],
        [2, 0],
    ])}`
);
console.log(
    `Is scheduling possible: ${find_order(6, [
        [2, 5],
        [0, 5],
        [0, 4],
        [1, 4],
        [3, 2],
        [1, 3],
    ])}`
);

console.log(`Is scheduling possible: ${
    find_order(6, [
      [0, 4],
      [1, 4],
      [3, 2],
      [1, 3],
    ])}`);
