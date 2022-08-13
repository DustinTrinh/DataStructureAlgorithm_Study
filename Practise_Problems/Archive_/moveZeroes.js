//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[count] = nums[i];
            count+=1;
            console.log(nums + " : " + count);
            
        }
    }
    console.log("-------");
    while(count < nums.length){
        nums[count] = 0;
        count+=1;
        console.log(nums + " : " + count);
    }
    return nums;
};

nums = [1,1,1,1,1,0,0,1,0,3,12];
console.log(moveZeroes(nums));