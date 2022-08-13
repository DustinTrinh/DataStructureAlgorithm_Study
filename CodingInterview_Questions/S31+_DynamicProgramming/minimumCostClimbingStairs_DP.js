//https://leetcode.com/problems/min-cost-climbing-stairs/

const minimumCostClimbingStairs_DP = (cost) => {
    const n = cost.length;
    const dp = [];
    return Math.min(minCost(n-1, cost, dp), minCost(n-2, cost, dp));
};

const minCost = (i, cost, dp) => {
    if(i < 0){
        return 0;
    }
    if(i ===0 || i === 1) return cost[i];

    if(dp[i] !== undefined){
        return dp[i];
    }

    dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
    return dp[i];
    
};

const cost = [10,15,20];
let result = minimumCostClimbingStairs_DP(cost);
console.log(result);

