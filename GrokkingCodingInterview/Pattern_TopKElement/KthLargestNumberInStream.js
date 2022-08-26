const Heap = require("../../node_modules/collections/heap");

class KthLargestNumberInStream {
    constructor(nums, k) {
        // TODO: Write your code here
        this.k = k;
        this.minHeap = new Heap([], null, ((a,b) => b - a));

        nums.forEach((num) => {
            this.add(num);
          });
    }

    add(num) {
        this.minHeap.push(num);

        if(this.minHeap.length > this.k){
            this.minHeap.pop();
        }
        return this.minHeap.peek();
    }
}

kthLargestNumber = new KthLargestNumberInStream([5,6,7,8,9], 2);
console.log(`4th largest number is: ${kthLargestNumber.add(1)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
