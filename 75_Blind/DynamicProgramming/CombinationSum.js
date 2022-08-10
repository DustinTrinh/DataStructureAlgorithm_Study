//https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result = [];
    dfs(0, target);
    
};

let candidates = [2,3,6,7];
let target = 7;
let result = combinationSum(candidates, target);