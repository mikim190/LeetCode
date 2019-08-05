/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var max = 0;
    var memo = {};

    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if ( memo[current] >= start) {
            start = memo[current] + 1;
        }
        memo[current] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
};

