//https://leetcode.com/problems/valid-parentheses/

const parens = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}
var isValid = function(s) {
    if(s.length === 0) return true;
    let stack = [];
    
    for(let i = 0; i < s.length;i++){
        if(parens[s[i]]){
            stack.push(s[i]);
        }
        else{
            const leftBracket = stack.pop();
            console.log(leftBracket);
            const correctBracket = parens[leftBracket];
            if(s[i] !== correctBracket){
                return false;
            }
        }
        console.log(stack);
    }
    return stack.length === 0 ? true : false;
};

let s = "([{})";
console.log(isValid(s));