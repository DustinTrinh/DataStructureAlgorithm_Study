// /https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
        let lower = Math.min(height[left], height[right]);
        let tempArea = lower * (right-left);
        maxArea = Math.max(tempArea, maxArea);

        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
};

let height = [1,8,6,2,5,4,8,3,7];
let result = maxArea(height);
console.log(result);