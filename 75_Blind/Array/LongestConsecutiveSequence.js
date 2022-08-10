//https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let newSet = new Set(nums);
    let counter = 0;
    newSet.forEach(num => {
        let temp = 0;
        
        if(!newSet.has(num-1)){
            while(newSet.has(num)){
                temp+=1;
                num=num+1;
            }
        }
        counter = Math.max(temp, counter);
    })

    return counter;
};

let nums = [100,4,200,1,3,2,5,6,9,10];
let result = longestConsecutive(nums);
console.log(result);