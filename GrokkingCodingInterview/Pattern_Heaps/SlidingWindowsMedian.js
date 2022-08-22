class SlidingWindowMedian {
    find_sliding_window_median(nums, k) {
        result = [];
        // TODO: Write your code here
        return result;
    }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
