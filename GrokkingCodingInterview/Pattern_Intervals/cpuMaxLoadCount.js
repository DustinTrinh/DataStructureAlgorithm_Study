class Job {
    constructor(start, end, cpu_load) {
        this.start = start;
        this.end = end;
        this.cpu_load = cpu_load;
    }
}

const find_max_cpu_load = function (jobs) {
    jobs.sort((a, b) => a.start - b.start);

    let [firstStart, firstEnd, firstLoad] = [
        jobs[0].start,
        jobs[0].end,
        jobs[0].cpu_load,
    ];

    for (let i = 1; i < jobs.length; i++) {
        let [nextStart, nextEnd, nextLoad] = [
            jobs[i].start,
            jobs[i].end,
            jobs[i].cpu_load,
        ];

        if (nextStart < firstEnd) {
            firstLoad = Math.max(firstLoad, firstLoad + nextLoad);
            //console.log(firstLoad)
        } else {
            [firstStart, firstEnd] = [jobs[i].start, jobs[i].end];
            firstLoad = Math.max(firstLoad, jobs[i].cpu_load);
        }
    }

    return firstLoad;
};

console.log(
    `Maximum CPU load at any time: ${find_max_cpu_load([
        new Job(1, 4, 3),
        new Job(2, 5, 4),
        new Job(7, 9, 6),
    ])}`
);
console.log(
    `Maximum CPU load at any time: ${find_max_cpu_load([
        new Job(6, 7, 10),
        new Job(2, 4, 11),
        new Job(8, 12, 15),
    ])}`
);

console.log(
    `"Maximum CPU load at any time: ${find_max_cpu_load([
        new Job(1, 4, 2),
        new Job(2, 4, 1),
        new Job(3, 6, 5),
    ])}`
);
