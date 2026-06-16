class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if (s.length===0) return 0;
        
        let left = 0;
        let right = 1;
        let longest = 1;
        let set = new Set();
        set.add(s[left]);

        while (right < s.length) {
            while (right < s.length && !set.has(s[right]) ) {
                set.add(s[right]);
                longest = Math.max(longest, right-left+1);
                right++;
            }
            while (right < s.length && set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
        }

        return longest;
    }
}
