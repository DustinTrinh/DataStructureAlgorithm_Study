/*
Time Complexity: O(N)
Space Complexity:O(N)
*/
const make_squares = function (arr) {
    squares = new Array(arr.length).fill(0);
    let left = 0;
    let right = arr.length - 1;
    let highestIndex = squares.length - 1;

    while (left <= right) {
        let squareL = Math.pow(arr[left], 2);
        let squareR = Math.pow(arr[right], 2);

        if (squareL > squareR) {
            squares[highestIndex] = squareL;
            left++;
        } else {
            squares[highestIndex] = squareR;
            right--;
        }
        highestIndex--;
    }

    return squares;
};

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
