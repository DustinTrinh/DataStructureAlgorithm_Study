//https://leetcode.com/problems/valid-palindrome/
//https://leetcode.com/problems/valid-palindrome-ii/

var isPalindrome = function(s) {
    let s1 = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let s2 = "";
    for(let i = s1.length-1; i >= 0; i--){
        s2 = s2.concat(s1[i]);
    }
    if(s1 === s2){
        return true;
    }
    else{
        return false;
    }
};

function validSubPalindrome(s, left, right){
    while(left<right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
//Remove 1 character and it will be palindrome
var validPalindrome = function(s) {
    let s1 = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s[s.length-1];

    while(left < right){
        if(s[left] !== s[right]){
            return validSubPalindrome(s,left+1,right) || validSubPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
};

let s = "raceacar";
console.log(validPalindrome(s));