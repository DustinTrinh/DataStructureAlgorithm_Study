const anagram = (str) => {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = str.length -1;

    while(left <= right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

let a = "abcdcbaa";
console.log(anagram(a));