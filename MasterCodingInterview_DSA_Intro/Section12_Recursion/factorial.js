const factorial = (value) =>{
    if(value === 1) return 1;

    return value * factorial(value-1);
}

const factorial2 = (value) =>{
    let result = 1;
    while (value > 0){
        result *= value;
        value--; 
    }
}

let result = factorial(5);
let result2 = factorial(5);
console.log(result);
console.log(result2);
