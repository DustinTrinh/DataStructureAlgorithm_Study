/*
Time Complexity: O(2^N)
Space Complexity:O(2^N)
*/
function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = subsets[j].slice(0); // clone the permutation
      console.log(set1)
      set1.push(currentNumber);
      
      subsets.push(set1);
    }
  }

  return subsets;
}
//console.log(find_subsets([1, 5, 3]));
//find_subsets([1,3,5]);
/*
  console.log('Here is the list of subsets: ');
  let result = find_subsets([1, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  
  console.log('Here is the list of subsets: ');
  result = find_subsets([1, 5, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  */
let a = [[1,2,3],[1,2,3,4,5,6,7]]
console.log(a[1].slice(0))