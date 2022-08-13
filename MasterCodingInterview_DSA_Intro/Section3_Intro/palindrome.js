const palindrome = (str) =>{
    let str2 = "";
    for(let i = str.length-1; i >= 0; i--){
        str2 = str2.concat(str[i]);
        console.log(str2);
    }
    
    if(str === str2){
        return true;
    }
    else{
        return false;
    }
};

let res = palindrome("abccba");
console.log(res);