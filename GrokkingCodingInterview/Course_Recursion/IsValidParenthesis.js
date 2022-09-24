function balanced(testVariable, startIndex = 0, currentIndex = 0) {
    // Base case1 and 2
    if (startIndex == testVariable.length) {
      return currentIndex == 0
    }
  
    // Base case3
    if (currentIndex < 0) { // A closing parenthesis did not find its corresponding opening parenthesis
      return false
    }
  
    // Recursive case1
    if (testVariable[startIndex] == "(") { 
      return balanced(testVariable, startIndex + 1, currentIndex + 1)
    }
  
    // Recursive case2
    else if (testVariable[startIndex] == ")") { 
      return  balanced(testVariable, startIndex + 1, currentIndex - 1)
    }
  
    else {
      return false // the string contained an unrecognized character
    }
  }
  
  // Driver Code
  testVariable = ["(", "(", ")", ")", "(", ")"]
  console.log("The array [\"(\", \"(\", \")\", \")\", \"(\", \")\"] is balanced: " + balanced(testVariable))
  
  testVariable = ["(", "(", ")"]
  console.log("The array [\"(\", \"(\", \")\"] is balanced: " + balanced(testVariable))