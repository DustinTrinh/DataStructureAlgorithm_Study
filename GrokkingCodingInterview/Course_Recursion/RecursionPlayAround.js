let paren = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
};
let validParenthesis = (str) => {
    if(str.length % 2 !== 0 || str[0] === ')' || str[0] === ']' || str[0] === '}') return false;
    
    let storage = [];
    for(let i = 0; i < str.length; i++){
        if(paren[str[i]]){
            storage.push(str[i]);
        }
        else{
           let element = storage.pop();
            if(str[i] !== paren[element]){
                return false;
            }
        }
    }
    return storage.length === 0;
}

console.log(validParenthesis("((()))"))