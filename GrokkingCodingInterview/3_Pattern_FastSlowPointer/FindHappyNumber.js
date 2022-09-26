/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/
const find_happy_number = function (num) {
    // TODO: Write your code here\
    let slow = num;
    let fast = num;

    while (true) {
        slow = calculatation(slow);
        fast = calculatation(calculatation(fast));

        if (slow === fast) break;
    }
    return slow === 1;
};

function calculatation(num) {
    let sum = 0;
    while (num > 0) {
        let temp = num % 10;
        sum += Math.pow(temp, 2);
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
