/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const fruits_into_baskets = function (fruits) {
    // TODO: Write your code here
    let longest = 0;
    let storage = new Set();
    let start = 0;

    for(let i = 0; i < fruits.length; i++){
        storage.add(fruits[i]);
        
        while(storage.size > 2){
            storage.delete(fruits[start]);
            start++;
        }
        longest = Math.max(longest, i - start + 1);
    }
    if(longest !== 0) return longest;
    return -1;
};

/*
function fruits_into_baskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
*/

console.log(
    `Maximum number of fruits: ${fruits_into_baskets([
        "A",
        "B",
        "C",
        "A",
        "C",
    ])}`
);