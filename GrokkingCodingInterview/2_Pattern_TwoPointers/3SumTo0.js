/*
Time Complexity: O(NlogN + N^2)
Space Complexity:O(N)
*/
const search_triplets = function (arr) {
    triplets = [];
    arr.sort((a,b) => a-b);
    // TODO: Write your code here

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        if (i > 0 && arr[i] === arr[i - 1]) continue;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum > 0) {
                right -= 1;
            } else if (sum < 0) {
                left += 1;
            } else if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left += 1;
                while (arr[left] === arr[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
