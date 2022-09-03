const find_subsets = function (nums) {
    let subsets = [];
    nums.sort((a, b) => a - b);
    subsets.push([]);
    let start = 0;
    let end = 0;

    for (let i = 0; i < nums.length; i++) {
        start = 0;

        if (i > 0 && nums[i] === nums[i - 1]) {
            start = end + 1;
        }

        end = subsets.length - 1;
        for (let j = start; j < end + 1; j++) {
            let tempSet = subsets[j].slice(0);
            tempSet.push(nums[i]);
            subsets.push(tempSet);
        }
    }
    // TODO: Write your code here
    return subsets;
};

console.log("Here is the list of subsets: ");
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});

console.log("Here is the list of subsets: ");
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});

let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9,10];
let a3 = a1.concat(a2);
console.log(a3)