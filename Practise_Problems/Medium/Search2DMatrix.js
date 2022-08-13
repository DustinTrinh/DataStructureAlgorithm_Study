//https://leetcode.com/problems/search-a-2d-matrix/
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === target){
                return true;
            }
            else if(matrix[i][j] > target){
                return false;
            }
        }
    }
    return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3

console.log(matrix.length);