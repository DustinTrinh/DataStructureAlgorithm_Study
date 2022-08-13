var twoSum = function(nums, target) {
    let map = new Map();
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] === undefined){
            map[target - nums[i]] = i;
        }
        else{
            res.push(map[nums[i]]);
            res.push(i);
            break;
        }
    }
    return res;
};

let arr = [1,2,3,4,5,6,7,8,10,13,24,55];
let target = 56;
let ret = twoSum(arr, target);
console.log(ret);

let arr1 = [1,2,3,4,5,6,7,8,10,13,24,55];
let map = new Map();
map[2] = 21;
//console.log(!map[2]);