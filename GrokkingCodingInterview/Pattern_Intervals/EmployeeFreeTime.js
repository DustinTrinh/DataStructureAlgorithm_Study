/*
Time Complexity: O(NlogN)
Space Complexity:O(N)
*/

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}

const find_employee_free_time = function (schedule) {
    result = [];
    let mergedSchedule = [];

    for (let workHours of schedule) {
        for (let hours of workHours) {
            mergedSchedule.push(hours);
        }
    }

    mergedSchedule.sort((a, b) => a.start - b.start);
    let [firstStart, firstEnd] = [
        mergedSchedule[0].start,
        mergedSchedule[0].end,
    ];
    for (let i = 1; i < mergedSchedule.length; i++) {
        let [nextStart, nextEnd] = [
            mergedSchedule[i].start,
            mergedSchedule[i].end,
        ];

        //have overlapping
        if (nextStart <= firstEnd) {
            firstEnd = Math.max(firstEnd, nextEnd);
        } else {
            result.push(new Interval(firstEnd, nextStart));
            [firstStart, firstEnd] = [
                mergedSchedule[i].start,
                mergedSchedule[i].end,
            ];
        }
    }

    return result;
};

input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
