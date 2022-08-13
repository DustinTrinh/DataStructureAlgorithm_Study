//https://leetcode.com/problems/move-zeroes/

nums = [0,0,0,10,1,0,3,12];


var moveZeroes = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length;i++){
        if(nums[i] != 0){
            let temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
            index++;
        }
    }
    return nums;
};

const result = moveZeroes(nums);
console.log(result);