//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Using sliding window

var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    let result = 0;
    let storeChar = {};
    let left = 0;
    for(let right = 0; right < s.length; right++){
        let currentChar = s[right];
        let prevSeen = storeChar[currentChar];
        if(prevSeen >= left){ 
            left = prevSeen+1;
        }
        storeChar[currentChar] = right;
        result = Math.max(result, right-left+1);
    }
    return result;
};


let s = "tmmzuxt";
console.log(lengthOfLongestSubstring(s));

console.log(undefined > 0);