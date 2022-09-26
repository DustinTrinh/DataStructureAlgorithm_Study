/*
Time Complexity: O(N + k)
Space Complexity:O(k)
*/
const find_first_k_missing_positive = function (nums, k) {
    missingNumbers = [];

    let i = 0;

    while(i < nums.length){
        let j = nums[i] - 1;

        if(nums[i] !== nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else{
            i++;
        }
    }
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i+1) {
            missingNumbers.push(i+1)
        };
        if(missingNumbers.length === k) return missingNumbers;
    }
    let newElelment = nums[nums.length-1] + 1;
    while(missingNumbers.length < k){
        missingNumbers.push(newElelment);
        newElelment++;
    }

    return missingNumbers;
};

console.log(find_first_k_missing_positive([3, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));
