function sumRange(num){
    if(num ===1 ) {
        return 1;
    }
    return num + sumRange(num-1);
}

function factorial(num){
    if(num ===  1){
        return 1;
    }
    return (num * (factorial(num-1)));
}

//Dealing with arrays with Helper Method Recursion
function collectOddValues1(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}

//Dealing with arrays with Pure Recursion
//Lesson 49

function collectOddValues2(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    console.log(newArr);
    return newArr;
}

n=5;
n1 = [1,4,2,4,6,4,5,7,17,87,81,92,91,101];
//console.log("Test: " + (n*(n+1)/2));
//console.log("Sumrange: " + sumRange(n));
//console.log("Factorial: " + factorial(n));
console.log("Collect Odd: " + collectOddValues2(n1));