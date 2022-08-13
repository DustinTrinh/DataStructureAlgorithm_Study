//https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    const negative = x < 0;
    x = Math.abs(x);
    let result = 0;

    while(x>0){
        let temp = x%10;
        x = Math.floor(x/10);

        result *= 10;
        result += temp;
    }
    if (result > Math.pow(2,31)) return 0;
    return negative ? result*= -1: result;
};

console.log(reverse(-123))