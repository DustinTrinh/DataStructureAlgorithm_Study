const non_repeat_substring = function(str) {
    // TODO: Write your code here
    if(str.length < 2) return str.length;
    let longest = 0;
    let charStorage = new Set();
    let start = 0;

    for(let i = 0; i < str.length; i++){
        if(charStorage.has(str[i])){
            while(charStorage.has(str[i])){
                charStorage.delete(str[start]);
                start++;
            }
            charStorage.add(str[i])
        }
        else{
            charStorage.add(str[i])
        }
        longest = Math.max(longest, i - start + 1);
    }
    if(longest !== 0) return longest;
    return -1;
  };
  
  let str = "bacuytrqbbbbbbbbbbbc";
  console.log(non_repeat_substring(str));