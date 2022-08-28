//(BigO is O(1.6^n))
function fibonacci(n){
    if(n<2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

//Better version of Fibonacci using Memoized and bigO is O(n)
function fib(n, memo=[0,1,1]){
    if(memo[n] !== undefined) return memo[n];
    if(n<2) return n;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    console.log(memo)
    return res;
}

console.log(fib(6));

let a = [];
a[8] = 129;
console.log(a)