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

const merge = function (intervals) {
    merged = [];
    intervals.sort((a, b) => a.start - b.start);
    console.log(intervals)
    let firstEvent = intervals[0];
    let [curStart, curEnd] = [firstEvent.start, firstEvent.end];
    for(let i = 1; i < intervals.length; i++){
        
        let [nextStart, nextEnd] = [intervals[i].start, intervals[i].end];
        
        //if overlap
        if(nextStart < curEnd){
            //If total overlap
            curEnd = Math.max(nextEnd, curEnd);
        }
        else{
            merged.push(new Interval(curStart, curEnd));
            curStart = intervals[i].start;
            curEnd = intervals[i].end;
        }
    }
    merged.push(new Interval(curStart, curEnd));
    return merged;
};

merged_intervals = merge([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
    new Interval(10, 12),
    new Interval(3, 4),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
