/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const longest_substring_with_k_distinct = function (str, k) {
    let storage = new Set();
    let longest = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        storage.add(str[i]);

        while (storage.size > k) {
            storage.delete(str[start]);
            start++;
        }
        longest = Math.max(i - start + 1, longest);
    }
    if (longest !== 0) return longest;
    return -1;
};

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);