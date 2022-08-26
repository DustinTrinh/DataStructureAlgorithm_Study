const find_range = function(arr, key) {
    result = [- 1, -1];
    let left = 0;
    let right = arr.length - 1;
    let mid = 1;
    let foundAtIndex = 0;

    while(left <= right){
        mid = Math.floor((left+right)/2);

        if(arr[mid] < key){
            left = mid + 1;
        }
        else if(arr[mid] > key){
            right = mid - 1;
        }
        else{
            foundAtIndex = mid;
            result[0] = mid;
            result[1] = mid;
            break
        }
    }

    while(arr[mid-1] === key && mid-1 > 0){
        result[0] = mid - 1;
        mid = mid-1;
    }

    while(arr[foundAtIndex+1] === key && mid+1 < arr.length){
        result[1] = foundAtIndex + 1;
        foundAtIndex++;
    }
    return result;
  };
  
  
  console.log(find_range([4, 6, 6, 6, 9], 6))
  console.log(find_range([1, 3, 8, 10, 15], 10))
  console.log(find_range([1, 3, 8, 10, 15], 12))
  