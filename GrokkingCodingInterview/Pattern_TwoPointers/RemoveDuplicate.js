const remove_duplicates = function (arr) {
    let right = 0;
    let unique = 1;


    while(right < arr.length){
        if(arr[unique-1] !== arr[right]){
            arr[unique] = arr[right];
            unique++;
        }
        right++;
    }
    return unique;
};
/*
u: 1 1 2 2 2 3
r: 0 1 2 3 4 5
*/
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
