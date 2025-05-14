function knapsack(capacity, weights, values, n) {
    // Create DP table with (n+1) rows and (capacity+1) columns
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    // Build the table from bottom-up
    for(let i=0; i <= n; i++){
        for(let w=0; w<=capacity;w++){
            if(i == 0 || w == 0){
                dp[i][w] = 0
            } else if(weights[i-1] <= w){
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Your specific test case
const values = [1, 4, 5, 7];
const weights = [1, 3, 4, 5];
const capacity = 7;
const n = 4;

console.log("Maximum value:", knapsack(capacity, weights, values, n));