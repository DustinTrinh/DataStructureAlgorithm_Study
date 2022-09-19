/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/
class ArrayReader {
    constructor(arr) {
        this.arr = arr;
    }
    get(index) {
        if (index >= this.arr.length) return Number.MAX_SAFE_INTEGER;
        return this.arr[index];
    }
}

const search_in_infinite_array = function (reader, key) {
    let arrayBounds = 2;
    let left = 0;
    let right = left * arrayBounds + 1;

    while (reader.get(right) < key) {
        let newLeft = right + 1;
        arrayBounds *= 2;
        left = newLeft;
        right = left + arrayBounds - 1;
        //console.log(left + " " + right + " " + arrayBounds + " " + newLeft)
    }

    return binarySearch(reader, left, right, key);
};

const binarySearch = (arr, left_, right_, key) => {
    let left = left_;
    let right = right_;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr.get(mid) > key) {
            right = mid - 1;
        } else if (arr.get(mid) < key) {
            left = mid + 1;
        } else if (arr.get(mid) === key) {
            return mid;
        }
    }
    return -1;
};

var reader = new ArrayReader([
    4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
]);
console.log(search_in_infinite_array(reader, 16));
console.log(search_in_infinite_array(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(search_in_infinite_array(reader, 15));
console.log(search_in_infinite_array(reader, 200));
