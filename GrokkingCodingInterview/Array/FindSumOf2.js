let findSumOfTwo = function(nums, val) {
    //TODO: Write - Your - Code
    let storeValue = new Set();

    for(let i = 0; i < nums.length; i++){
        if(storeValue.has(nums[i])){
            return true;
        }
        else{
            storeValue.add(val-nums[i]);
        }
    }

    return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let t = 311;
console.log(findSumOfTwo(v,t));