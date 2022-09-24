let paren = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
}

let validParen = (parens) => {
    let storage = [];

    for(let i = 0; i < parens.length; i++){
        if(paren[parens[i]]){
            storage.push(parens[i]);
        }
        else{
            if(paren[storage[storage.length-1]] === parens[i]){
                storage.pop();
            }
            else{
                return false;
            }
        }
    }
    return storage.length  === 0;
}
console.log(validParen('[][](){}{}[]]'))