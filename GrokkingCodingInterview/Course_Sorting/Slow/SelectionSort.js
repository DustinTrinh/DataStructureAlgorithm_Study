/*
Time Complexity: 
Best: O(N^2)
Average: O(N^2)
Worst: O(N^2)

Space Complexity:O(1)
*/
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}


let arr2 = [6,5,4,3,0];
console.log(selectionSort(arr2));