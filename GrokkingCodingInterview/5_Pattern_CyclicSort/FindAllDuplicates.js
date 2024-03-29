/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const find_all_duplicates = function (nums) {
    duplicateNumbers = [];
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

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i+1){
            duplicateNumbers.push(nums[i])
        }
    }

    return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));
