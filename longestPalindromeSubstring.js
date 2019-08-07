/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

var longestPalindrome = function(s) {
    let longest = '';
    
    if (s.length <= 1 || !s) {
        return s;
    }
    
    for (let i = 0; i < s.length; i++) {
        let current = checkPalindrome(s, i, i);
        if (current.length > longest.length) {
            longest = current;
        }
        current = checkPalindrome(s, i, i+1);
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
    
};

var checkPalindrome = function (s , start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return s.substring(start + 1, end);
};


//Time complexity: O(n^2)
//Space complexity: O(n)