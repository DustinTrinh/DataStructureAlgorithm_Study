//Check if array contain pair of value with a sum of input
//https://leetcode.com/problems/two-sum/description/
let arr = [2,5,3,65,2,1,3,8,5,4,3,7,9,3,1,4,6,99];
let sum = 900;

const pairWithSum = (array, sum) =>{
    let saveSet = new Set();

    for(let i = 0; i < array.length; i++){
        if(saveSet.has(array[i])){
            return true;
        }
        saveSet.add(sum-array[i]);
    }
    return false;
};

r = pairWithSum(arr, sum);
console.log(r);