class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let longest = 0;
        let set = new Set(nums);

        for (let num of set) {
            if (!set.has(num-1)){

                let tempLongest = 1;
                while (set.has(num+tempLongest)) {
                    tempLongest++
                   
                }
                longest = Math.max(tempLongest,longest)
            }
        }

        return longest

    }
}
