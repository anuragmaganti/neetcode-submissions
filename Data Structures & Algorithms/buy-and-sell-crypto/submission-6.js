class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let maxProfit = 0;
        while (j < prices.length) {
            if (prices[i] < prices[j]) {
                maxProfit = Math.max(prices[j] - prices[i], maxProfit);
            } else {
                i = j;
            }
            j++;
        }
        return maxProfit;
    }
}
