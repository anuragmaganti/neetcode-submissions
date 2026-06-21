class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let i = 0;
        let j = i+1;

        while (j<prices.length) {

            let profit = prices[j]-prices[i];
            maxProfit = Math.max(profit,maxProfit);

            if (prices[j]<prices[i]) {
                i = j;
            }
            j++;

        }

        return maxProfit
    }
}
