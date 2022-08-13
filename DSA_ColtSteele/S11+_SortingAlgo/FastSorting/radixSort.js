//Works with list of numbers. We have to translate strings to binary.
//Runtime is O(nk), k is the length of the number in 'n' array. 555 is 3 for k

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let largest = 0;
    for(let i of arr){
        var temp = digitCount(i);
        if(temp > largest){
            largest = temp;
        }
    }
    return largest;
}

function radixSort(arr){
    let maxdigitCount = mostDigits(arr);
    for(let k = 0; k < maxdigitCount; k++){
        let digitBucket = Array.from({length:10}, () => []);

        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            digitBucket[digit].push(arr[i]) ;
        }
        //COmbine all the contents within digitBucket into a single array => arr
        arr = [].concat(...digitBucket);
    }
    return arr;
}


let arr = [100, 4,5,7,3,1,6,7,88,43,65,234,1253,9685,12353,774,74,12,44,56,67];
console.log(radixSort(arr));