//https://leetcode.com/problems/product-of-array-except-self/

//Worst solution with O(n^2)
var productExceptSelf = function(nums) {
    let tempProduct = 0;
    let result = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j !== i){
                tempProduct *= nums[j];
            }
        }
        result.push(tempProduct);
        tempProduct = 1;
    }
    return result;
};

//https://www.youtube.com/watch?v=bNvIQI2wAjk&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=4
//Using prefix and postfix
var productExceptSelf2 = function(nums) {
    let result = [];
    let prefix = [];
    let postfix = [];
    let tempProduct = 1;

    for(let i = 0; i < nums.length; i++){
        tempProduct *= nums[i];
        prefix.push(tempProduct);
    }
    tempProduct = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        tempProduct *= nums[i];
        postfix.unshift(tempProduct);
    }

    for(let i = 0 ; i< nums.length; i++){
        let preIdx = i -1;
        let postIdx = i + 1;

        if(preIdx < 0){
            result.push(1 * postfix[postIdx]);
        }
        else if(postIdx >= nums.length){
            result.push(prefix[preIdx] * 1);
        }
        else{
            result.push(prefix[preIdx] * postfix[postIdx]);
        }
    }

    return result;
};

//Best way
var productExceptSelf3 = function(nums) {
    let result = [];
    let postfix = 1;
    let prefix = 1;
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
        result[i] = prefix;
        prefix *= nums[i]; 
    }
    console.log(result);
    for(let i = nums.length-1; i >= 0 ; i--){
        result[i] *= postfix; //  6*1=6  2*4=8  1*12=12 1*24    
        postfix *= nums[i]; //  1*4=4   4*3=12  12*2=24
    }
    return result;
};


let nums = [1,2,3,4];
let result = productExceptSelf3(nums);
console.log(result);