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

/*
function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
*/
