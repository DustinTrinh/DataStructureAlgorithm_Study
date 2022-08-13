//https://leetcode.com/problems/reverse-string
var reverseString = function(s) {
    let i = 0;
    let j = s.length-1;
    while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
        
        if(i === j){
            break;
        }
        
        console.log(i + " " + j);
    }
    return s;
};

var reverseString2 = function(s) {
    let start = 0;
    let end = s.length -1;
    while(start < end){
        //swap 
        [s[start],s[end]] = [s[end],s[start]]
        start++;
        end--;
    }
    return s;
};

const arr = ["H","a","n","n","a","h"];
console.log(reverseString(arr));
