const length_of_longest_substring = function (str, k) {
    let countOnes = 0;
    let maxLength = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 1) countOnes++;

        if (i - start + 1 - countOnes > k) {
            if (str[start] === 1) countOnes--;
            start++;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength === 0 ? -1 : maxLength;
};
