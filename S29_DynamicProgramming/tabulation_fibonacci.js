//Bottom to top approach
//Better than Memoized because it wont have error "Maximum call stack size exceed" when the n is too big (ex 10000) 

function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fib(10));