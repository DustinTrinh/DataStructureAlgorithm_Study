const find_k_frequent_numbers = function (nums, k) {
    let topNumbers = [];
    let tempArray = [];
    let countFrequent = new Map();

    for(let i = 0; i < nums.length; i++){
        tempArray.push([]);
    }

    for(let i = 0; i < nums.length; i++){
        if(!countFrequent.has(nums[i])){
            countFrequent.set(nums[i], 1);
        }
        else{
            countFrequent.set(nums[i], countFrequent.get(nums[i]) + 1 );
        }
    }
    countFrequent.forEach((value, key)=>{
        tempArray[value].push(key);
    });

    for(let i = tempArray.length-1; i >= 0; i--){
        if(!tempArray[i].length) continue;
        else{
            for(let item of tempArray[i]){
                topNumbers.push(item);
            }
        }
    }
    while(topNumbers.length > k){
        topNumbers.pop()
    }
    
    
    return topNumbers;
};

console.log(
    `Here are the K frequent numbers: ${find_k_frequent_numbers(
        [1, 3, 5, 12, 11, 12, 11],
        2
    )}`
);
console.log(
    `Here are the K frequent numbers: ${find_k_frequent_numbers(
        [5, 12, 11, 3, 11],
        2
    )}`
);
