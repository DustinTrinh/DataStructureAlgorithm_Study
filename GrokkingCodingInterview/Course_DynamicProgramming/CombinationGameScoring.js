/* Recursive
Time Complexity: O(2^n)
Space Complexity:O(N)

// Scoring options are 1, 2, and 4
let scoringOptions = function (n) {
	// Setting up our base cases
	
	// We can not get a negative score, we return 0 for negative values
	if (n < 0) return 0;

	// There is only 1 way to reach a score of 0
	if (n == 0) return 1;

	// Recursively calculate the number of ways using the
	// recurrence relation we saw earlier
	return scoringOptions(n - 1) + scoringOptions(n - 2) + scoringOptions(n - 4);
}
*/

/*
Time Complexity: O(N)
Space Complexity:O(N)
*/
// Scoring options are 1, 2, and 4
let scoringOptions = function (n) {
    // Initializing our solution array
    let Vs = [];
    for (let i = 0; i < n + 1; i++) {
        Vs.push(-1);
    }

    // Set up the base case, 1 way to score 0
    Vs[0] = 1;
    let solverDPHelper = function (n, Vs) {
        // We can not get a negative score, we return 0 for negative values
        if (n < 0) return 0;

        // Check if a solution already exists in the array
        if (Vs[n] != -1) {
            return Vs[n];
        }

        // Else, we recursively calculate the solution for the
        // given value and store it in our solution array
        Vs[n] =
            solverDPHelper(n - 1, Vs) +
            solverDPHelper(n - 2, Vs) +
            solverDPHelper(n - 4, Vs);

        return Vs[n];
    };

    // Pass our array to the helper function
    return solverDPHelper(n, Vs);
};

console.log("1.  Number of ways score 5 can be reached = " + scoringOptions(5));
console.log(
    "------------------------------------------------------------------------------------------------------\n"
);

console.log("2.  Number of ways score 7 can be reached = " + scoringOptions(7));
console.log(
    "------------------------------------------------------------------------------------------------------\n"
);
