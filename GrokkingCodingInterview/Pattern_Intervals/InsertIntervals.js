class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function (intervals, new_interval) {
    let merged = [];
    intervals.push(new_interval);
    intervals.sort((a, b) => a.start - b.start);
    let firstEvent = intervals[0];
    let [curStart, curEnd] = [firstEvent.start, firstEvent.end];
    for (let i = 1; i < intervals.length; i++) {
        let [nextStart, nextEnd] = [intervals[i].start, intervals[i].end];

        //if overlap
        if (nextStart <= curEnd) {
            //If total overlap
            curEnd = Math.max(nextEnd, curEnd);
            console.log(curEnd);
        } else {
            merged.push(new Interval(curStart, curEnd));
            curStart = intervals[i].start;
            curEnd = intervals[i].end;
        }
    }
    merged.push(new Interval(curStart, curEnd));
    return merged;
};

process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
    [
        new Interval(1, 3),
        new Interval(1, 4),
        new Interval(1, 5),
        new Interval(1, 6),
    ],
    new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
    [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
    new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();
