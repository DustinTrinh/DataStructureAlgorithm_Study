let findMissingNum = (num) => {
    let sum = 0;
    let n = num.length; 
    for(let i = 0; i < num.length; i++){
        sum += num[i];
     }
    
     return Math.floor(n*(n+1)/2) - sum;
}
console.log(findMissingNum([0,1,2,3,4,5,6,7,8,9,10,12, 11]));
