class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        function isValid(char) {
            return (
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9")
            );
        }

        while (i < j) {
            while (i < j && !isValid(s[i])) {
                i++;
            }
            while (j > i && !isValid(s[j])) {
                j--;
            }
            if (s[i].toLowerCase()!==s[j].toLowerCase()) {
                return false
            }
            i++;
            j--;
            
        }

        return true;

    }
}
