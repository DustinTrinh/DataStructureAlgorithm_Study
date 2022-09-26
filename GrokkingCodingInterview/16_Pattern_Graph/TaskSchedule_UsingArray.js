const is_scheduling_possible = function (tasks, prerequisites) {
    if (tasks <= 0) {
        return false;
    }
    let order = [];
    let sources = [];
    let inDegrees = new Array(tasks).fill(0);
    let graph = new Array(tasks).fill(0).map(() => Array());

    //Make a graph
    prerequisites.forEach((preq) => {
        let parent = preq[0];
        let child = preq[1];

        graph[parent].push(child);
        inDegrees[child]++;
    });

    //Find sources
    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) {
            sources.push(i);
        }
    }

    //Order
    while (sources.length > 0) {
        let vertex = sources.shift();
        order.push(vertex);

        graph[vertex].forEach((child) => {
            inDegrees[child]--;
            if (inDegrees[child] === 0) {
                sources.push(child);
            }
        });
    }

    return order.length === tasks;
};

console.log(
    `Is scheduling possible: ${is_scheduling_possible(3, [
        [0, 1],
        [1, 2],
    ])}`
);
console.log(
    `Is scheduling possible: ${is_scheduling_possible(3, [
        [0, 1],
        [1, 2],
        [2, 0],
    ])}`
);
console.log(
    `Is scheduling possible: ${is_scheduling_possible(6, [
        [2, 5],
        [0, 5],
        [0, 4],
        [1, 4],
        [3, 2],
        [1, 3],
    ])}`
);
