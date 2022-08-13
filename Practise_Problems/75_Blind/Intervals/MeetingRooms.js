/**
 * https://leetcode.com/problems/meeting-rooms/
 * Time O(N * logN) | Space O(1)
 * @param {number[][]} intervals
 * @return {boolean}
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const canAttendMeetings = (intervals) => {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aStart !== bStart ? aStart - bStart : aEnd - bEnd
  );
  let prev = intervals.shift();

  for (const curr of intervals) {
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    const hasOverlap = currStart < prevEnd;
    if (hasOverlap) return false;

    prev = curr;
  }
  return true;
};
let intervals = [[0, 30], [5, 10], [15, 25]];
let intervals2 = [];
for(let i = 0 ; i < intervals.length; i++){
    let temp = new Interval(intervals[i][0], intervals[i][1]);
    intervals2.push(temp);
}
//console.log(intervals2);
console.log(canAttendMeetings(intervals));
