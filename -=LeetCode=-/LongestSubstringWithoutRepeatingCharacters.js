/*Given a string s, find the length of the longest
substring
without repeating characters.

Input: s = "dvdf" dvD vdf
Output: 3
Explanation: The answer is "vdf", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = "abcabcbb" abcA bcaB cabC abcB bcB cbB bB
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const strLen = s.length;
    let maxStrike = '';
    let maxLen = 0;
    let leftIndex = 0;
    while(leftIndex < strLen){
        maxStrike = '';
        for (let i = leftIndex; i < strLen; i++) {
            const letter = s[i];
            if(!maxStrike.includes(letter)){
                maxStrike += letter;
                if(maxStrike.length > maxLen){
                    maxLen = maxStrike.length;
                }
            } else {
                break;
            }
        }
        leftIndex += 1;
    }
    return maxLen;
};

/*
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" ")); // надо 1
console.log(lengthOfLongestSubstring("k")); // надо 1
console.log(lengthOfLongestSubstring("au")); // надо 2
console.log(lengthOfLongestSubstring("dvdf")); // надо 3
 */

var lengthOfLongestSubstringBetter = function(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let map = new Map();
    let start = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1);
        }

        map.set(s[i], i);

        max = Math.max(max, i - start + 1);
    }

    return max;
};

lengthOfLongestSubstringBetter("абвгдеаб");