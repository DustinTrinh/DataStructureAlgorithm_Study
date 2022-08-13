//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

var minRemoveToMakeValid = function(s) {
    let result = s.split("");
    let stack = [];

    for(let i = 0; i < result.length; i++){
        if(result[i] === "("){
            stack.push(i);
        }
        else if(result[i] === ")" && stack.length){
            stack.pop();
        }
        else if(result[i] === ")"){
            result[i] = "";
        }
        console.log(stack);
    }
    while(stack.length){
        const currentIndex = stack.pop();
        result[currentIndex] = "";
    }
    
    return result.join("");
};

s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s));
