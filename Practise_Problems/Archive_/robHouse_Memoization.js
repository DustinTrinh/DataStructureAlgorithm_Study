var rob = function(nums) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i%2) {
            odd = Math.max(odd+nums[i], even);
        } else {
            even = Math.max(even+nums[i], odd);
        }
    }
    return Math.max(odd, even);
};

var rob2 = function(nums) {
    let cache = {}
    
    function dp(num) {
        // base cases
        if (num == 0) return nums[0]
        if (num == 1) return Math.max(nums[0], nums[1])
        
        if (cache[num] == null) {
            // [a,b,c,d] -> Math.max(dp(c), dp(b + d)) - you can rob either d and b or only c - whichever is greater
            cache[num] = Math.max(dp(num - 1), dp(num - 2) + nums[num]) // recurrence relation
        }
        
        return cache[num]
    }
    
    return dp(nums.length - 1)
};
const nums = [2,7,9,3,1];
console.log(rob(nums));