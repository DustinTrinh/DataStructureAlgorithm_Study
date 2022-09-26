/*
Time Complexity: 
Best: O(N)
Average: O(N^2)
Worst: O(N^2)

Space Complexity:O(1)
*/
function bubbleSort(array) {
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < array.length; i++){
            if(array[i] && array[i+1] && array[i] > array[i+1]){
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                swapped=true;
            }
        }
    }while(swapped)
    return array;
  }

  let a1 = [2,4,5,6,7,8,2,3,4,5,9,10,12];
  console.log(bubbleSort(a1));