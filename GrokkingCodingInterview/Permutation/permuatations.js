const find_permutations = function(nums) {
    result = [];
    
    for(let i = 0; i < nums.length; i++){
        let temp = [nums[i]];
        let leftArray = nums.slice(0, i);
        let rightArray = [];
        if(i + 1 >= nums.length){
            rightArray = nums.slice(i);
        }
        else{
            rightArray = nums.slice(i+1);
        }
        let joinArray = leftArray.concat(rightArray);

        for(let j = 0; j < joinArray.length; j++){
            temp.push(joinArray[j]);
        }
        result.push(temp);
        
    }

    return result;
  };
  
  
  console.log(find_permutations([1, 3, 5]));
  