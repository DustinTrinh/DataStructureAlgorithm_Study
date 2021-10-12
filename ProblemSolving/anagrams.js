function anagrams(s1,s2){
    var string1 = s1.toLowerCase();
    var string2 = s2.toLowerCase();

    if(string1.length != string2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of string1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of string2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key] != frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(anagrams('', ''));
console.log(anagrams('aaz', 'zza'));
console.log(anagrams('anagram', 'nagaram'));
console.log(anagrams("rat","car"));
console.log(anagrams('awesome', 'awesom'));
console.log(anagrams('qwerty', 'qeywrt'));
console.log(anagrams('texttwisttime', 'timetwisttext'));
/*
anagrams('', '') // true
anagrams('aaz', 'zza') // false
anagrams('anagram', 'nagaram') // true
anagrams("rat","car") // false) // false
anagrams('awesome', 'awesom') // false
anagrams('qwerty', 'qeywrt') // true
anagrams('texttwisttime', 'timetwisttext') // true
*/