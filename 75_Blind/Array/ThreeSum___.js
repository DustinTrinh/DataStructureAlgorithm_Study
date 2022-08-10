//https://leetcode.com/problems/3sum/

function threeSum(nums) {
	const results = []

	if (nums.length < 3) return results

	nums = nums.sort((a, b) => a - b)

	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
        console.log("Break here: " + nums[i] + " " + target);
		if (nums[i] > target){
            console.log("Break here: " + nums[i] + " " + target);
            break;
        } 

		if (i > 0 && nums[i] === nums[i - 1]) continue

		let j = i + 1

		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
				j++
				k--

			} else if (sum < target) {
				j++

			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};

let nums = [-1,0,1,2,-1,-4];
let res = threeSum(nums);
console.log(res);