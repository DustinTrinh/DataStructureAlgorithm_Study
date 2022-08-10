//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//T: O(n)
//S: O(1)
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for(let i = 0 ; i< prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
  };

  let prices = [9,2,3,1,5,6, 0,7,8,99,0];
  let result = maxProfit(prices);
  console.log(result);