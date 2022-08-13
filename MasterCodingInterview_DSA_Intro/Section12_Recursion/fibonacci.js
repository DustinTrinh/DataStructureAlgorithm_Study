//(BigO is O(1.6^n))
function fibonacci(n){
    if(n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//O(n)
function fibonacci2(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }

//Better version of Fibonacci using Memoized and bigO is O(n)
function fibonacci3(n, memo=[undefined, 1,1]){
    if(memo[n] !== undefined) return memo[n];
    if(n<=2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

let result = fibonacci(5);
console.log(result);