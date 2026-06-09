class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = "";

        for (let str of strs) {
            newStr = newStr + str.length + "#" + str;
        }
        console.log(newStr);

        return newStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];

        let i=0;
        while (i<str.length){
            
            let j=i;
            while (str[j] !== "#" && j<str.length) {
                j++
            }
            
            let wordLength = Number(str.slice(i,j));
            let wordStart = j+1;
            let wordEnd = wordStart + wordLength;
            let word = str.slice(wordStart,wordEnd)
            result.push(word);
            i  = wordEnd;
  

        }

        return result;

    }
}
