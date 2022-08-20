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
    console.log(intervals)
    if(intervals.length === 0) return 0;
    let prev = intervals.shift();
    let rooms = 1;
  
    for (const curr of intervals) {
      const [prevStart, prevEnd] = prev;
      const [currStart, currEnd] = curr;
  
      const hasOverlap = currStart < prevEnd;
      if (hasOverlap){
        rooms += 1;
      }
  
      prev = curr;
    }
    return rooms;
  };
  let intervals = [[2,3], [2,4], [4, 5], [3,5]];
  let intervals2 = [];
  for(let i = 0 ; i < intervals.length; i++){
      let temp = new Interval(intervals[i][0], intervals[i][1]);
      intervals2.push(temp);
  }
  //console.log(intervals2);
  console.log(canAttendMeetings(intervals));
  