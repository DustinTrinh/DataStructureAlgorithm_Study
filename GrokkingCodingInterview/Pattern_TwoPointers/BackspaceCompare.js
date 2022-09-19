/*
Time Complexity: O(N + M)
Space Complexity:O(M + N)
*/
const backspace_compare = function (str1, str2) {
    let string1 = [];
    let string2 = [];

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === '#'){
            string1.pop();
        }
        else{
            string1.push(str1[i]);
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(str2[i] === '#'){
            string2.pop();
        }
        else{
            string2.push(str2[i]);
        }
    }
    string1 = string1.join('');
    string2 = string2.join('');

    return string1 === string2;
};

console.log(backspace_compare('xy#z', 'xzz#'));
console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xp#', 'xyz##'));
console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));