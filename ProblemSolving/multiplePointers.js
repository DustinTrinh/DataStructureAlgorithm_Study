function sumZero1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//Better Solution
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

/*
console.log(sumZero2([-3,-2,-1,0,1,2,3])); // [-3,3] 
console.log(sumZero2([-8,-2,0,1,3])); // undefined
console.log(sumZero2([-15,-5, -1,0, 1,2,3])); // undefined
*/

function countUniqueValues1(array){
    let count = 0;
    let j = 1;
    for(var i = 0; i < array.length; i++){
        if(array[i] !== array[j]){
            count += 1;
            j += 1;
        }
        else{
            array[i+1] = array[j];
            j+=1;
        }
    }
    return count;
  }

  function countUniqueValues2(array){
    let i = 0;
    for(var j = 1; j < array.length; j++){
        if(array[i] != array[j]){
            i++;
            array[i] = array[j];
        }
    }
    return i+1;
  }

console.log(countUniqueValues1([1,1,1,1,1,1,1,2,2,2,2,3,4,5,6,]));