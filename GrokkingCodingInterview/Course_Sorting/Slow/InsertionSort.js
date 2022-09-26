/*
Time Complexity: 
Best: O(N)
Average: O(N^2)
Worst: O(N^2)

Space Complexity:O(N)
*/
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
        console.log(array);
    }
    return array;
}

let arr2 = [6, 5, 4, 3, 0];
console.log(insertionSort(arr2));
