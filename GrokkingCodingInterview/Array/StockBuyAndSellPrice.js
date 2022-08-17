//https://www.educative.io/module/lesson/data-structures-in-javascript/7AN3rEJG5NO
let findBuySellStockPrices = function(stockNums) {
    //TODO: Write - Your - Code
    if(stockNums.length < 2) return;
    let lowest = Infinity;
    let lowestIdx = 0;
    let max = -Infinity;
    let maxIdx = 0;
  
    for(let i =0; i < stockNums.length; i++){
      if(stockNums[i] < lowest){
        lowest = stockNums[i];
        lowestIdx = i;
      }
      console.log(lowest);
      if(max < stockNums[i]-lowest){
        max = stockNums[i]-lowest;
        maxIdx = i;
        console.log(max);
      } 
    } 
    return [stockNums[lowestIdx], stockNums[maxIdx]]; //Return a tuple with (high, low) price values
  };

  let prices = [8,7,2];
  let result = findBuySellStockPrices(prices);
  console.log(result);