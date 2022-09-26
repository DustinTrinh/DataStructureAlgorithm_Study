/*
Time Complexity: 
Best: O(NK)
Average: O(NK)
Worst: O(NK)

Space Complexity:O(N + K)
*/

function radixSort(array) {
    const max = Math.max(...array).toString().length;
    let digitBuckets = [];
    for (let i = 0; i < max + 1; i++) {
        digitBuckets = [];
        for (let j = 0; j < array.length; j++) {
            const digit = getDigit(array[j], i + 1);
            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(array[j]);
        }

        idx = 0;
        for (let t = 0; t < digitBuckets.length; t++) {
            if (digitBuckets[t] && digitBuckets[t].length > 0) {
                for (let m = 0; m < digitBuckets[t].length; m++) {
                    array[idx++] = digitBuckets[t][m];
                }
            }
        }
    }
    return array;
}

function getDigit(num, nth) {
    let value = 0;
    while (nth--) {
        value = num % 10;
        num = Math.floor((num - value) / 10);
    }
    return value;
}

let arr = [100, 4, 5, 7, 3, 1, 6, 7, 88, 43, 65, 234, 774, 74, 12, 44, 56, 67];

console.log(radixSort(arr));
