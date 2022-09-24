/*
Time Complexity: O(N)
Space Complexity:O(1)
*/

let getFibonacci = function(n) {

    if (n <= 1) {
      return n;
    }
    
    // // Initializing our variables
    let n1 = 1;
    let n2 = 0;
    let result = 0;
    
    // Start the loop at 2 since we already have n1 and n2
    for (let i=2; i <= n ; ++i) {
      // Calculate the new result  
      result = n1 + n2;
      n2 = n1;
      n1 = result;
    }
  
    return result;
  };
    
  let inputs = [0,1,2, 3, 4,5]
  
  for (let i = 0; i < inputs.length; i++){
    console.log(i+1 + ".  getFibonacci(" + (inputs[i]) + ") = " + getFibonacci(inputs[i]));
    console.log("------------------------------------------------------------------------------------------------------\n");
  }