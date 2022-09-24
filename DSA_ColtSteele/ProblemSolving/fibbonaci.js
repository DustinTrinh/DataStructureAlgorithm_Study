//(BigO is O(1.6^n))
function fibonacci(n){
    if(n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//Better version of Fibonacci using Memoized and bigO is O(n)
function fib(n, memo=[undefined, 1,1]){
    if(memo[n] !== undefined) return memo[n];
    if(n<=2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fibonacci(2));