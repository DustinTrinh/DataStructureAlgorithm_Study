/*
Time Complexity: O(N+M)
where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.

Space Complexity: O(M)
*/
const find_permutation = function (str, pattern) {
    let charStorage = new Map();
    let streak = 0;
    let start = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (!charStorage[pattern[i]]) {
            charStorage[pattern[i]] = 1;
        } else {
            charStorage[pattern[i]] += 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        const rightChar = str[i];
        if (rightChar in charStorage) {
            // Decrement the frequency of matched character
            charStorage[rightChar] -= 1;
            if (charStorage[rightChar] === 0) {
                streak++;
            }
        }

        if (streak === Object.keys(charStorage).length) {
            return true;
        }

        if (i >= pattern.length - 1) {
            leftChar = str[start];
            start += 1;
            if (leftChar in charStorage) {
                if (charStorage[leftChar] === 0) {
                    streak -= 1;
                }
                charStorage[leftChar] += 1;
            }
        }
    }

    return streak === 0 ? false : true;
};

console.log(`Permutation exist: ${find_permutation("oidbcaf", "abc")}`);
console.log(`Permutation exist: ${find_permutation("odicf", "dc")}`);
console.log(`Permutation exist: ${find_permutation("bcdxabcdy", "bcdyabcdx")}`);
console.log(`Permutation exist: ${find_permutation("aaacb", "abc")}`);
