//https://leetcode.com/problems/climbing-stairs/
var climbStairs = function(n) {
    if (n === 1) return 1;
    let one = 1;
    let two = 1;
    
    let temp;
    for (let i = 0; i < n - 1; i++) {
        let temp = one;     //1, 2, 3, 5
        one = one + two;    //2, 3, 5, 8
        two = temp;         //1, 2, 3, 5
        console.log(one + " " + two);
    }
    
    return one;
};

console.log(climbStairs(5))