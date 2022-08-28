const triplet_sum_close_to_target = function (arr, target_sum) {
    let closest = -Infinity;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        if (i > 0 && arr[i] === arr[i - 1]) continue;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            let diff = target_sum - sum;

            if(diff === 0) return target_sum;

            if(Math.abs(diff) < Math.abs(closest) ||
            Math.abs(diff) === Math.abs(closest) &&
            diff > closest){
                closest = diff;
            }

            if(diff > 0) {
                left++;
            }
            else{
                right--;
            }
        }
    }
    //console.log(closest)
    return target_sum - closest;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], -2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
