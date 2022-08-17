/*
Time complexity O(n)
Space complexity O(1)
*/

class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

let mergeIntervals = function (v) {
  let result = [];
  let indexTracker = 0;
  result.push(v[indexTracker]);
  for (let i = 1; i < v.length; i++) {
    if (
      v[i].first <= result[indexTracker].second &&
      v[i].second <= result[indexTracker].second
    ) {
      continue;
    } else if (
      v[i].first <= result[indexTracker].second &&
      v[i].second > result[indexTracker].second
    ) {
      result[indexTracker].second = v[i].second;
    }
    else if(v[i].first > result[indexTracker].second &&
            v[i].second > result[indexTracker].second){
      indexTracker++;
      result.push(v[i]);
    }
  }
  //write your code here
  return result;
};

let v1 = [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6)];
let v2 = [new Pair(1, 5), new Pair(4, 6), new Pair(6, 8), new Pair(11, 15)];
let v3 = [new Pair(3, 7), new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];
let v4 = [new Pair(1, 5)];

console.log(mergeIntervals(v3));
