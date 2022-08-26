const search_bitonic_array = function (arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let largestAt = findLargest(arr, key);
    let firstHalf = findElement(arr, left, largestAt, key);
    let secondHalf = findElement(arr, largestAt, right, key);

    if (arr[largestAt] === key) return largestAt;
    if (firstHalf !== -1) return firstHalf;
    if (secondHalf !== -1) return secondHalf;
    return -1;
};

const findElement = (arr, left, right, key) => {
    let mid = 1;
    let isAscending = arr[left] < arr[right];
    while (arr[mid] !== key && left <= right) {
        mid = Math.floor((left + right) / 2);

        if (isAscending) {
            if (arr[mid] < key) {
                left = mid + 1;
            } else if (arr[mid] > key) {
                right = mid - 1;
            } else {
                return mid;
            }
        } else {
            if (arr[mid] < key) {
                right = mid - 1;
            } else if (arr[mid] > key) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
    }
    return -1;
};

const findLargest = (arr) => {
    let right = arr.length - 1;
    let left = 0;
    let mid = 1;

    while (left < right) {
        mid = Math.floor((right + left) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));
