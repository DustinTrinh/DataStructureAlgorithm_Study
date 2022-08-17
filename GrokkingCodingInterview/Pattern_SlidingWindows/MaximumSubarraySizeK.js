function max_sub_array_of_size_k(k, arr) {
    let max = 0;
    let sum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (i >= k - 1) {
            max = Math.max(max, sum);
            sum -= arr[start];
            start++;
        }
    }
    return max;
}

console.log(
    `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
        3,
        [2, 1, 5, 1, 3, 2]
    )}`
);
console.log(
    `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
        2,
        [2, 3, 4, 1, 5]
    )}`
);
