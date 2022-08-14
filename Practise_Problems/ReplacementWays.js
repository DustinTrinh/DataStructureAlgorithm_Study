
/*
 * Complete the 'fillMissingBrackets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function checkBalance(s) {
  let open = [];
  let close = [];
  let q = [];

  let openRound = 0;
  let openSquare = 0;
  let closeSquare = 0;
  let closeRound = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[") {
      open.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]") {
      close.push(s[i]);
    } else {
      q.push(s[i]);
    }
  }
  for (let i = 0; i < open.length; i++) {
    if (open[i] === "(") {
      openRound += 1;
    } else {
      openSquare += 1;
    }
  }

  for (let i = 0; i < close.length; i++) {
    if (close[i] === ")") {
      closeRound += 1;
    } else {
      closeSquare += 1;
    }
  }
  let sumRound = Math.abs(openRound - closeRound);
  let sumSquare = Math.abs(openSquare - closeSquare);
  let missing = q.length - (sumRound + sumSquare);

  return missing >= 0 ? true : false;
}
function fillMissingBrackets(s) {
  let result = 0;
  for (let i = 2; i < s.length; i++) {
    let s1 = s.slice(0, i);
    let s2 = s.slice(i);
    if (checkBalance(s1) === true && checkBalance(s2) === true) {
      result += 1;
    }
  }
  return result;
}

let str = "(??)[[??";
let result = fillMissingBrackets(str);
console.log(result);
