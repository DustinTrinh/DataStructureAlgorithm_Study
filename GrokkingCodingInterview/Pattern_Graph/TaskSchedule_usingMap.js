/*
Time Complexity: O(V + E)
Space Complexity:O(V+E)
*/
const is_scheduling_possible = function (tasks, prerequisites) {
    let order = [];
    let sources = [];
    let inDegrees = new Array(tasks).fill(0);
    let graph = new Map();

    //1. Make a graph
    prerequisites.forEach((preq) => {
        let parent = preq[0];
        let child = preq[1];

        if (graph.has(parent)) {
            graph.get(parent).push(child);
        } else {
            graph.set(parent, [child]);
        }
        inDegrees[child]++;
    });

    //Find sources
    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) {
            sources.push(i);
        }
    }

    //Ordering
    while (sources.length > 0) {
        let vertex = sources.shift();
        order.push(vertex);

        if (graph.has(vertex)) {
            for (let child of graph.get(vertex)) {
                inDegrees[child]--;
                if (inDegrees[child] === 0) {
                    sources.push(child);
                }
            }
        }
    }

    return order.length === tasks;
};

const is_scheduling_possible2 = function (tasks, prerequisites) {
    let order = [];
    let sources = [];
    let inDegrees = new Map();
    let graph = new Map();

    //1. Make a graph
    for (preq of prerequisites) {
        let parent = preq[0];
        let child = preq[1];

        if (!graph.has(parent)) {
            graph.set(parent, [child]);
        } else {
            graph.get(parent).push(child);
        }

        if (!inDegrees.has(child)) {
            inDegrees.set(child, 1);
        } else {
            inDegrees.set(child, inDegrees.get(child) + 1);
        }
        //console.log(graph);
    }

    //Find sources
    graph.forEach((value, key) => {
        if (!inDegrees.get(key)) {
            sources.push(key);
        }
    });
    
    
    //console.log(inDegrees);
    //console.log(sources);
    
    //Ordering
    while (sources.length) {
        let temp = sources.shift();
        order.push(temp);
        if (graph.get(temp)) {
            for (node of graph.get(temp)) {
                inDegrees.set(node, inDegrees.get(node) - 1);
                if (inDegrees.get(node) === 0) {
                    sources.push(node);
                }
            }
        }
    }

    return order.length === tasks;
};

console.log(`Is scheduling possible: ${is_scheduling_possible2(3, [[0, 1], [1, 2],])}`);
console.log(`Is scheduling possible: ${is_scheduling_possible2(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible2(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
