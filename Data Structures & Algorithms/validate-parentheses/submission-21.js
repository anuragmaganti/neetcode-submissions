class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            }

            if (stack.length === 0 && (char === ")" || char === "}" || char === "]")) {
                return false;
            }

            if (char === ")") {
                if (stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (char === "}") {
                if (stack[stack.length - 1] === "{") {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (char === "]") {
                if (stack[stack.length - 1] === "[") {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
