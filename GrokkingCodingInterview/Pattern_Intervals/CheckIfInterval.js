/*
Time Complexity: O(NlogN)
Space Complexity:O(1)
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

const isOverlapped = function (intervals) {
    let isOverlap = false;
    intervals.sort((a, b) => a.start - b.start);

    let firstEvent = intervals[0];

    for(let i = 1; i < intervals.length; i++){
        let [curStart, curEnd] = [firstEvent.start, firstEvent.end];
        let [nextStart, nextEnd] = [intervals[i].start, intervals[i].end];
        
        //if overlap
        if(nextStart < curEnd){
            return true;
        }
        else{
            firstEvent = intervals[i];
        }
    }
    return isOverlap;
};

merged_intervals = ([
    new Interval(1, 4),
    new Interval(8, 9),
    new Interval(7, 9)
]);

console.log(isOverlapped(merged_intervals));

