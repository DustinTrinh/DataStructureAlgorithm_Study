const Heap = require("../../node_modules/collections/heap");
class SlidingWindowMedian {
    find_sliding_window_median(nums, k) {
        let result = [];
        let tempArray = [];
        for(let i = 0; i < nums.length; i++){
            
            tempArray.push(nums[i]);
            if(tempArray.length === k){
                //console.log(tempArray)
                result.push(this.findMedian(tempArray));
                tempArray.shift();
            }
        }

        return result;
    }

    findMedian(nums){
        let maxHeap = new Heap([], null, ((a,b) => a-b));
        let minHeap = new Heap([], null, ((a,b) => b-a));
        let median = 0;
        for(let i = 0; i < nums.length; i++){
            if(maxHeap.length === 0 || nums[i] < maxHeap.peek()){
                maxHeap.push(nums[i])
            }
            else{
                minHeap.push(nums[i])
            }

            if(maxHeap.length > minHeap.length + 1){
                minHeap.push(maxHeap.pop());
            }
            else if(minHeap.length > maxHeap.length){
                maxHeap.push(minHeap.pop())
            }
        }

        if(minHeap.length === maxHeap.length){
            median = parseFloat((minHeap.peek() + maxHeap.peek())/2).toFixed(1);
        }
        else{
            median = parseFloat(maxHeap.peek()).toFixed(1);
        }
        return median;
    
    }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
