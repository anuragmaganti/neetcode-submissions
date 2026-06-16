class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let buy = 0;
        let sell = 1;
        let maxProfit = 0;

        while (sell<prices.length) {
            let profit = prices[sell]-prices[buy];
            maxProfit = Math.max(maxProfit,profit);

            if (prices[buy]>prices[sell]) {
                buy = sell;
            }
            sell++;

        }

        return maxProfit;

    }
}
