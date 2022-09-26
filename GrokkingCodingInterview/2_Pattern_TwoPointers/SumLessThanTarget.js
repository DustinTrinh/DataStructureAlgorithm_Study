const find_subarrays = function(arr, target) {
    result = [];
    
    for(let i = 0; i < arr.length; i++){
        let pointer = i+1;
        let product = 0;
        if(arr[i] < target){
            result.push([arr[i]]);
        }
        while(pointer < arr.length){

            product = arr[i] * arr[pointer];

            if(product < target){
                result.push([arr[i], arr[pointer]]);
            }
            pointer++;
        }
    }

    return result;
  };
  
  console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));