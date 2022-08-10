//https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let tempString = "";

    for(let i = s.length-1; i >= 0; i--){
        tempString = tempString.concat(s[i]);
    }
    return s === tempString;
};

let str = s = "A man, a plan, a canal: Panama";
let result = isPalindrome(str);
console.log(result);

console.log(str.reverse());