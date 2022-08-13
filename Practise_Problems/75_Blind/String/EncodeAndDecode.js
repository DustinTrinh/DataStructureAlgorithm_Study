const encode = (arr) => {
    let result = "";
    for(let i = 0; i < arr.length; i++){
        result = result.concat(arr[i].length + "#" + arr[i]);
    }
    return result;
}

const decode = (s) => {
    let result = [];

    for(let i = 1 ; i < s.length; i++){
        if(s[i] === "#" && parseInt(s[i-1]) != NaN ){
            console.log("Heyyy")
            console.log(parseInt(s[i-1]));
            let temp = 1;
            let tempWord = "";
            while(temp <= parseInt(s[i-1])){
                tempWord = tempWord.concat(s[i+temp]);
                temp++;
            }
            result.push(tempWord);
        }
    }
    return result;
}

let arr = ["Dusty", "The", "Cutie"];
let result = encode(arr);
console.log(result);

let result2 = decode(result);
console.log(result2);