/*
 * Complete the 'fillMissingBrackets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function checkBalance(s) {
    let openRound = 0;
    let openSquare = 0;
    let closeSquare = 0;
    let closeRound = 0;
    let questionMark = 0;

    for(let i = 0; i < s.length; i++){
        switch (s[i]){
            case '(':
                openRound++;
                break;
            case '[':
                openSquare++;
                break;
            case ')':
                closeRound++;
                break;
            case ']':
                closeSquare++;
                break;
            default:
                questionMark++;
                break;
        }

    }

    let missingRound = Math.abs(openRound - closeRound);
    let missingSquare = Math.abs(openSquare - closeSquare);
    let missing = questionMark - (missingSquare + missingRound);

    return missing >= 0 && missing%2 === 0 ? true : false;
}
function fillMissingBrackets(s) {
    let result = 0;
    for (let i = 2; i < s.length; i++) {
        let s1 = s.slice(0, i);
        let s2 = s.slice(i);
        console.log(s1);
        console.log(s2);
        if (checkBalance(s1) === true && checkBalance(s2) === true) {
            result += 1;
        }
    }
    return result;
}

let str = "(??)[[??";
let result = fillMissingBrackets(str);
console.log(result);

console.log(checkBalance("?)[[??"))