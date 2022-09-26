const maxFrequency = (arr, k) => {
    let max = 0;
    let start = 0;
    let sum = 0;

    arr.sort((a,b) => a-b);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] * (i - start + 1) > sum + k) {
            sum -= arr[start];
            start++;
        }

        max = Math.max(max, i - start + 1);
    }
    return sum;
};
