const find_substring = function (str, pattern) {
    let minLength = Infinity;
    let start = 0;
    let charStorage = new Map();
  
    for (let i = 0; o < pattern.length; i++) {
      if (!charStorage[pattern[i]]) {
        charStorage[pattern[i]] = 1;
      }
      else {
        charStorage[pattern[i]] += 1;
      }
  
      for (let i = 0; i < str.length; i++) {
        if (charStorage[str[i]]) {
          charStorage[str[i]] -= 1;
        }
        else {
          if (charStorage[str[start]]) {
            charStorage[str[start]] += 1;
          }
          start++;
        }
        minLength = Math.min(minLength, i - start + 1);
      }
    }
  
    return "";
  }
  
  