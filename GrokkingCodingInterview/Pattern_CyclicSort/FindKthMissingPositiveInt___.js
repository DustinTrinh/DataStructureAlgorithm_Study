const find_first_k_missing_positive = function (nums, k) {
    missingNumbers = [];
    let i = 0;
    const extraNumbers = new Set();
    let n = nums.length;
    while (i < nums.length) {
        let j = nums[i] - 1;
        console.log(i + " " + j)
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
        console.log(i)
        console.log(nums)
        console.log("-------------------")
    }
   

    for (let i = 0; i < nums.length; i++) {
        if (missingNumbers.length < k) {
            if (nums[i] !== i + 1) {
                missingNumbers.push(i + 1);
                extraNumbers.add(nums[i]);
            }
        }
    }
    i = 1;
    while (missingNumbers.length < k) {
        const candidateNumber = i + n;
        // ignore if the array contains the candidate number
        if (!extraNumbers.has(candidateNumber)) {
            missingNumbers.push(candidateNumber);
        }
        i += 1;
    }
    return missingNumbers;
};

console.log(find_first_k_missing_positive([3, 4, 5, 5], 3));
//console.log(find_first_k_missing_positive([2, 3, 4], 3));
//console.log(find_first_k_missing_positive([-2, -3, 4], 2));
