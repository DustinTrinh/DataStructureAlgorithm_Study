//https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {

    if(s.length!== t.length) return false;

    let str1 = new Map();
    let str2 = new Map();

    for(let i = 0 ; i < s.length; i++){
        if(str1[s[i]] === undefined){
            str1[s[i]] = 1;
        }
        else{
            str1[s[i]] +=1;
        }
    }

    for(let i = 0 ; i < t.length; i++){
        if(str2[t[i]] === undefined){
            str2[t[i]] =1;
        }
        else{
            str2[t[i]] +=1;
        }
    }
    for(let key in str1){
        if(str1[key] !== str2[key]) return false;
    }
    return true;
};

let str1 = "whatwhat";
let str2 = "thawwtah";
let result = isAnagram(str1,str2);
console.log(result);