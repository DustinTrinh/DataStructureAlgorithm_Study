function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }

let result = reverseStringRecursive("Whatever");
console.log(result);

let str = "ABCDEFG"
console.log("ABCDE".substr(2));
console.log("ABCDE".charAt(0));