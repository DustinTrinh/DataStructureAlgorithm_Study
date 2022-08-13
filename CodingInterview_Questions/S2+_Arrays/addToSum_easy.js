//Given array and a number, find 2 numbers that can add up and equal to the given number

function addToSum(arr, target){
    if(arr.length <= 1) return null; 
    const numbers = {};
    for(let i = 0; i < arr.length; i++){
        const currentValue = numbers[arr[i]];
        if(currentValue >= 0){
            return [currentValue, i];
        }
        else{
            const numberToFind = target - arr[i];
            numbers[numberToFind] = i;
        }
    }
    return null;
}

let arr = [1,2,43,5,3,9,8];
console.log(addToSum(arr, 13));