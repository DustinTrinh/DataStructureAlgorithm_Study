const nums = [1,2,3,4,5,6,7,3,3,5,3,3,65,3,3,7,7,99];
const nums2 = [0,1,2,3,4,5,6,7,8,9];

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

const test = (nums) => {
    const res = new Set(nums);
    return res;
}

const result = containsDuplicate(nums2);
const res2 = test(nums);
console.log(res2);