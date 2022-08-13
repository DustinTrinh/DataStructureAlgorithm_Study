//https://leetcode.com/problems/trapping-rain-water/
//We can have a formula such as:
// currentWater = Math.min(maxLeft, maxRight) - currentHeight;
//Then we can add up all the current water blocks. 

//O(n^2) runtime. Which is bad
var trap = function(height) {
    if(height.length <= 1) return 0;
    let totalWater = 0;
    for(let i = 0; i < height.length; i++){
        let maxLeft = 0;
        let maxRight = 0;
        let leftIndex = i;
        let rightIndex = i;
        let currentWater = 0;
        while(leftIndex >= 0){
            maxLeft = Math.max(maxLeft, height[leftIndex]);
            leftIndex--;
        }
        while(rightIndex < height.length){
            maxRight = Math.max(maxRight, height[rightIndex]);
            rightIndex++;
        }
        currentWater = Math.min(maxLeft, maxRight) - height[i];
        if(currentWater >= 0){
            totalWater += currentWater;
        }
    }
    return totalWater;
};

var trap2 = function(height){
    let leftIndex = 0;
    let rightIndex = height.length -1;
    let totalWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while(leftIndex < rightIndex){
        if(height[leftIndex] <= height[rightIndex]){
            if(height[leftIndex] >= maxLeft){
                maxLeft = height[leftIndex];
            }
            else{
                totalWater += maxLeft - height[leftIndex];
            }
            leftIndex++;
        }
        else{
            if(height[rightIndex] >= maxRight){
                maxRight = height[rightIndex];
            }
            else{
                totalWater += maxRight - height[rightIndex];
            }
            rightIndex--;
        }
    }
    return totalWater;
}

let height = [0,3,0, 1,0,0,0,4, 2];
console.log(trap2(height));