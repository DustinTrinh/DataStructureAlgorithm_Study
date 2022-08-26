const Heap = require("../../node_modules/collections/heap");

class MedianOfAStream {
    constructor() {
        this.maxHeap = new Heap([], null, (a, b) => a - b);
        this.minHeap = new Heap([], null, (a, b) => b - a);
    }

    insert_num(num) {
        if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        //Max heap can have equal or 1 more element than Min Heap only
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    find_median(self) {
        if(this.maxHeap.length === this.minHeap.length){
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
        else{
            return this.maxHeap.peek();
        }
    }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(-1);
//console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
//console.log(`The median is: ${medianOfAStream.find_median()}`);
//medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
