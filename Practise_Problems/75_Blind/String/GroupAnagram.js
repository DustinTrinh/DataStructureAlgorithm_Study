//https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    if(strs.length <= 1) return [strs];
    
    let storeMap = new Map();

    for(let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split('').sort().join('');

        if(storeMap[sortedStr] === undefined){
            storeMap[sortedStr] = [strs[i]];
        }
        else{
            storeMap[sortedStr].push(strs[i]);
        }
    }
    
    let result = [];
    for(let str in storeMap){
        console.log(str);
        result.push(storeMap[str]);
    }
    return result;
};

let strs = ["eat","tea","tan","ate","nat","bat"];
let result = groupAnagrams(strs);
console.log(result);
