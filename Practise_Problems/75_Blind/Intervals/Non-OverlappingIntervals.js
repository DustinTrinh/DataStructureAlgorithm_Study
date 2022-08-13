//https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>  aEnd - bEnd );
    let remove = 0;
    let prev = intervals.shift();

    for(let time of intervals){
        let [pastStart, pastEnd] = prev;
        let [futureStart, futureEnd] = time;
        
        if(futureStart >= pastEnd){
            prev = time;
        }
        else{
            remove+=1;
            prev[0][1] = Math.min(pastEnd, futureEnd);
        }

    }
    return remove;
};

let intervals = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]];
console.log(eraseOverlapIntervals(intervals));