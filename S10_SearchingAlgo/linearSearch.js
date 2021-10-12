//indexOf, includes, find, findIndex in JS is all Linear search
//Iterate thru the array 1 by 1 from index 0
//O(n) runtime

function linearSearch(arr, target){
    for(let i of arr){
        if(i === target){
            console.log("Found it: " + i);
            return 1;
        }
    }
    console.log("Not Found: " + target);
    return -1;
}

function linearSearch2(arr, target){
    for(let i in arr){
        if(arr[i] === target){
            console.log("Found it: " + i);
            return 1;
        }
        else{
            console.log(i + " " + arr[i])
        }
    }
    console.log("Not Found: " + target);
    return -1;
}

function linearSearch3(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            console.log("Found it: " + i);
            return 1;
        }
        else{
            console.log(i + " " + arr[i])
        }
    }
    console.log("Not Found: " + target);
    return -1;
}

let arr1 = ["cat", "dog", "bird", "monkey"];
let arr2 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67]
let target = 67;

//linearSearch(arr2, target);
//linearSearch2(arr2, target);
linearSearch3(arr2, target);