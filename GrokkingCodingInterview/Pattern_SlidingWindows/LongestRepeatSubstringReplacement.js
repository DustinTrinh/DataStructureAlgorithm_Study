/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const length_of_longest_substring = function (str, k) {
    // TODO: Write your code here
    let charStorage = new Map();
    let start = 0;
    let maxRepeat = 0;
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        if (!charStorage[str[i]]) {
            charStorage[str[i]] = 1;
        } else {
            charStorage[str[i]] += 1;
        }

        maxRepeat = Math.max(maxRepeat, charStorage[str[i]]);

        if (i - start + 1 - maxRepeat > k) {
            charStorage[str[start]] -= 1;
            start++;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    if (maxLength !== 0) return maxLength;
    return -1;
};

console.log(length_of_longest_substring("aabccbb", 2));
console.log(length_of_longest_substring("abbcb", 1));
console.log(length_of_longest_substring("abccde", 1));
