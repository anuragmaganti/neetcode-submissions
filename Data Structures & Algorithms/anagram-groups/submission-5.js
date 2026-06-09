class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let freqArr = new Array(26).fill(0);
            for (let s of str) {
                freqArr[s.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            let freqArrStr = freqArr.join(",");
            if (!map.has(freqArrStr)) {
                map.set(freqArrStr, new Array(1).fill(str));
            } else {
                map.get(freqArrStr).push(str);
            }
        }

        return(Array.from(map.values()))
    }
}
