//https://leetcode.com/problems/longest-substring-without-repeating-characters/

let lengthOfLongestSubstring = function(s) {
    let saveSubstring = new Set();
    let left = 0;
    let result = 0;
    for(let i = 0; i < s.length; i++){
        while(saveSubstring.has(s[i])){
            saveSubstring.delete(s[left]);
            left +=1; 
        }
        saveSubstring.add(s[i]);
        result = Math.max(result, i - left +1);
    }
    return result;
};

let s = "pwwkew";
let result = lengthOfLongestSubstring(s);
console.log(result);