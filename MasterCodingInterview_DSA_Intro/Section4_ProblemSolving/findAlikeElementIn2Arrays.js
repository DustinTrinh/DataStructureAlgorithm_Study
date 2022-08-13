// Given 2 arrays, create a function that
//let's a user know (true/false) whether
//these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

//Bad Solution
//O(a*b)
const findAlike = (a, b) => {
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] === b[j]){
                return true;
            }
        }
    }
    return false;
};

//Better Solution
//O(a+b)
const findAlike2 = (a, b) => {
    let map = {};

    if(a.length === 0 || b.length === 0){
        console.log("Empty array");
        return false;
    }

    //Loop through first array and create object where properties === items in the array
    for(let i = 0; i < a.length; i++){
        if(!map[a[i]]){
            const item = a[i];
            map[item] = true;
        }
    }
    
    //Loop thru 2nd array and check if the item in second array exist on created object
    for(let i = 0; i < b.length; i++){
        if(map[b[i]]){
            return true;
        }
    }
    return false;
};

let r1 = findAlike(array1, array2);
let r2 = findAlike2(array4, array3);
console.log(r2);