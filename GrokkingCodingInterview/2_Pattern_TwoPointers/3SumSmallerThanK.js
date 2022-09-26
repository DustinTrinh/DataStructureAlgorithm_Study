/*
Time Complexity: O(N^2)
Space Complexity:O(N)
*/
const triplet_with_smaller_sum = function (arr, target) {
    count = 0;
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        if (i > 0 && arr[i] === arr[i - 1]) continue;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            
            if (sum >= target) {
                right--;
            } else if (sum < target) {
                count += right - left;
                left++; 
            }
        }
    }

    return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
