const smallest_subarray_sum = function (s, arr) {
    // TODO: Write your code here
    let sum = 0;
    let start = 0;
    let count = Infinity;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        while(sum >= s){
            count = Math.min(count, i - start + 1);
            sum -= arr[start];
            start++;
        }
    }
    if (count !== Infinity) return count;
    return -1;
};

let test = smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]);
console.log(test);
