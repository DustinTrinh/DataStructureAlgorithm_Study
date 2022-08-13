const factorial = (n) => {
    if(n === 1) return 1;
    return n * factorial(n-1);
}

const uniqueBinaryTree = (n) =>{
    return factorial(n*2) / (factorial(n+1)*factorial(n));
}

console.log(uniqueBinaryTree(3));