//Find missing number from seuquence
let a  =4;
let b  = a * (a+1) /2;
let arr = [0,1,2,3,4,5,6, 7,8,9,10,12];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
let len = arr[arr.length-1];
let c  = len * (len+1) /2;
console.log(c - sum);