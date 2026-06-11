class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preFix = new Array(nums.length);
        preFix[0] = 1;
        let postFix = new Array(nums.length);
        postFix[nums.length-1]=1;

        for (let i = 1; i < nums.length; i++) {
            preFix[i] = nums[i - 1] * preFix[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            postFix[i] = nums[i+1] * postFix[i+1];
        }

        for (let i = 0; i<nums.length;i++) {
            postFix[i]=preFix[i]*postFix[i];
        }

        return postFix;
    }
}
