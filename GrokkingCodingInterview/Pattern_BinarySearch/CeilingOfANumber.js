const search_ceiling_of_a_number = function (arr, key) {
    if (key > arr[arr.length - 1]) return -1;
    let left = 0;
    let right = arr.length - 1;
    let mid = 1;
    let isAscending = arr[left] < arr[right];

    while (left <= right) {
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
    return left;
};

console.log(search_ceiling_of_a_number([4, 6, 10, 13, 19, 25, 31], 20));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15, 17, 20], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], -1));
