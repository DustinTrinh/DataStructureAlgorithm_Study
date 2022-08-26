const find_max_in_bitonic_array = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 1;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
};

console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]));
console.log(find_max_in_bitonic_array([3, 8, 3, 1]));
console.log(find_max_in_bitonic_array([1, 3, 8, 12]));
console.log(find_max_in_bitonic_array([10, 9, 8]));
