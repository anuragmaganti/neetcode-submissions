class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let buckets = Array.from({ length: nums.length + 1 }, () => []);
        let results = [];

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (let [key, value] of map) {
            buckets[value].push(key);
        }

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                results.push(num);

                if (results.length === k) {
                    return results;
                }
            }
        }

        return results;
    }
}
