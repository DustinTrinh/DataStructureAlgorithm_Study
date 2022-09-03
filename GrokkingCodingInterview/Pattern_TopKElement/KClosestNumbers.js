//Number of result = K;
//X is target
const find_closest_elements = function (arr, K, X) {
    result = [];
    if(K > arr.length) return result;
    let closest = Infinity;
    let closestIndex = 0;

    for(let i = 0; i < arr.length; i++){
        let temp = Math.abs(X - arr[i]);

        if(temp < closest){
            closest = temp;
            closestIndex = i;
        }
    }

    let left = closestIndex-1;
    let right = closestIndex+1;
    result.push(arr[closestIndex]);
    while(result.length < K){
        if(closestIndex === arr.length-1){
            result.unshift(arr[left]);
            left--;
            continue;
        }
        else if(closestIndex === 0){
            result.push(arr[right]);
            right++;
            continue;
        }
        
        if(Math.abs(X - arr[left]) < Math.abs(X - arr[right])){
            result.unshift(arr[left]);
            left--;
        }
        else{
            result.push(arr[right]);
            right++;
        }
    }
    
    return result;
};

console.log(
    `'K' closest numbers to 'X' are: ${find_closest_elements(
        [5, 6, 7, 8, 9],
        3,
        7
    )}`
);
console.log(
    `'K' closest numbers to 'X' are: ${find_closest_elements(
        [2, 4, 5, 6, 9],
        3,
        6
    )}`
);
console.log(
    `'K' closest numbers to 'X' are: ${find_closest_elements(
        [2, 4, 5, 6, 9],
        3,
        10
    )}`
);
