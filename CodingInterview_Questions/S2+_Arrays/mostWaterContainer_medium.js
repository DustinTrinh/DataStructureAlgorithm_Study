//https://leetcode.com/problems/container-with-most-water/#
//Weird that DIVIDE AND CONQUER works here. It should only work with sorted Arrays

function mostWaterContainer(arr){
    if(arr.length <= 1) return 0;
    let result = 0;
    let i = 0;
    let j = arr.length-1;

    while(i < j){
        let height = Math.min(arr[i], arr[j]);
        let width = j - i;
        let area = height * width;
        result = Math.max(result, area);

        if(arr[i] <= arr[j]){
            i++;
        }
        else{
            j--
        }
    }
    return result;
}

let arr = [1,8,6,2,5,4,8,3,7];
console.log(mostWaterContainer(arr));