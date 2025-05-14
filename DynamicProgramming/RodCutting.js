function rodCutting(n, prices) {
    const maxProfit = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            const currentProfit = prices[j - 1] + maxProfit[i - j];
            if (currentProfit > maxProfit[i]) {
                maxProfit[i] = currentProfit;
            }
        }
    }
    
    return maxProfit[n];
}

