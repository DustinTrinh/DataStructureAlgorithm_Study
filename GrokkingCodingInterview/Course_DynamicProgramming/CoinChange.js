let solveCoinChange = function (denominations, amount) {
    // Case for negative ammount
    if (amount < 0) {
        return 0;
    }

    // Initiliaze the solution list
    let solution = new Array(amount+1).fill(0);
    
    // Setting the inital case of getting 0 as 1 since
    // there is only 1 way to get 0, by selecting no coins
    solution[0] = 1;

    for (let den of denominations) {
        for (let i = den; i < amount + 1; i++) {
            solution[i] += solution[i - den];
            console.log(solution)
        }
    }

    // Return the last element of the solutions vector
    return solution[solution.length - 1];
};

let denominations1 = [1, 2, 3];
let amount1 = 6;
let result1 = solveCoinChange(denominations1, amount1);

console.log(
    "1. solveCoinChange(" +
        denominations1 +
        ", " +
        String(amount1) +
        ") = " +
        String(result1)
);
console.log(
    "------------------------------------------------------------------------------------------------------\n"
);

let denominations2 = [1, 2, 5];
let amount2 = 7;
let result2 = solveCoinChange(denominations2, amount2);

console.log(
    "2. solveCoinChange(" +
        denominations2 +
        ", " +
        String(amount2) +
        ") = " +
        String(result2)
);
console.log(
    "------------------------------------------------------------------------------------------------------\n"
);
