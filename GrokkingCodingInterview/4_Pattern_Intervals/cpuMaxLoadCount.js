/*
Time Complexity: O(NlogN)
Space Complexity:O(N)
*/


const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function find_max_cpu_load(jobs) {
  // sort the jobs by start time
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
    currentCPULoad = 0;
  const minHeap = new Heap([], null, ((a, b) => b.end - a.end));

  for (j = 0; j < jobs.length; j++) {
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into min_heap
    minHeap.push(jobs[j]);
    currentCPULoad += jobs[j].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}


console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`);
console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`);
console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`);
console.log(
    `"Maximum CPU load at any time: ${find_max_cpu_load([
        new Job(1, 5, 5),
        new Job(3, 7, 7),
        new Job(6, 8, 9),
    ])}`
);