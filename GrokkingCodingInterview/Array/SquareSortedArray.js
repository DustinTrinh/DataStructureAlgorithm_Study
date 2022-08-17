//Slower Version
const make_squares = function (arr) {
    squares = [];
    for (let i = 0; i < arr.length; i++) {
        squares.push(Math.pow(arr[i], 2));
    }
    squares.sort((a, b) => {
        return a - b;
    });
    return squares;
};

//Faster Version with Sliding Windows
function make_squares(arr) {
    const n = arr.length;
    squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0,
        right = n - 1;
    while (left <= right) {
        let leftSquare = arr[left] * arr[left],
            rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }

    return squares;
}
