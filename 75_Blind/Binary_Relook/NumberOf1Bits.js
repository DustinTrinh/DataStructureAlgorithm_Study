//https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(n) {
    let result = 0;
    
    for(let i = 0; i < 32; i++){
        result += n & 1;
        n >>= 1;
    }
    return result;
};

let n = 00000000000000001111111000001111;
console.log(hammingWeight(n));