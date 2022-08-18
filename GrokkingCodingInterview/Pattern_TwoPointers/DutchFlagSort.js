const dutch_flag_sort = function (arr) {
    let left = 0;
    let right = arr.length-1;
    let index = 0;

    while(index <= right){
        if(arr[index] === 0){
            [arr[index], arr[left]] = [arr[left], arr[index]];
            index++;
            left++
        }
        else if(arr[index] === 1){
            index++;
        }
        else{
            [arr[index], arr[right]] = [arr[right], arr[index]];
            right--;
        }
        console.log(arr)
    }
};

let arr = [1, 0, 2, 1, 0];
//dutch_flag_sort(arr);
//console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
