class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sClean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let i = 0;
        let j = sClean.length - 1;

        while (i < j) {
            if (sClean[i] === sClean[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    }
}
