//https://leetcode.com/problems/house-robber/

var robHelper = function(nums) {

    let rob1 = 0;
    let rob2 = 0;
    for(let i = 0; i < nums.length; i++){
        let temp = Math.max(rob1 + nums[i], rob2);  //(0+1,0), (1+1, 1), (1+3, 2), (2+1, 4)
        rob1 = rob2;                                //0 1 2 4
        rob2 = temp;                                //1 2 4 4
    }
    return rob2;
};

var rob = function(nums){
    if(nums.length === 1) return nums[0];
    let rob1 = rob(nums.slice(0, nums.length-1));
    let rob2 = rob(nums.slice(1));

    return rob1 > rob2 ? rob1 : rob2;
}

let nums = [1,2,3,1];
let result = rob(nums);
console.log(result);

console.log(rob2(nums));
