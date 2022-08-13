//https://leetcode.com/problems/valid-parentheses/

const parentheses = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
}

var isValidParentheses = function(s) {
    let storeParantheses = [];

    for(let i = 0; i < s.length; i++){
        if(parentheses[s[i]] !== undefined){
            storeParantheses.push(s[i]);
        }
        else{
            const element = storeParantheses.pop();
            if(s[i] !== parentheses[element]){
                return false;
            }
        }
    }
    return storeParantheses.length === 0;
};

const str = "()[]{}";
let result = isValidParentheses(str);
console.log(result);
