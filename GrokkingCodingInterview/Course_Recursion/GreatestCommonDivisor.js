function gcd(testVariable1, testVariable2) {
    if (testVariable1 == testVariable2) {
      return testVariable1;
    }
  
    if (testVariable1 > testVariable2) {
      return gcd(testVariable1 - testVariable2, testVariable2);
    }
    
    else {
      return gcd(testVariable1, testVariable2 - testVariable1);
    }
  }
  console.log(gcd(19, 42))