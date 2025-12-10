/*
Valid Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.
*/

// we can have characters which are non alphanumerical so
// remove all characters which are not alphanumerical
// lowercase the string
// make two pointers one at 0 and one at str.length - 1
// loop towards the center condition of left < right
// if left and right are not the same return false
// return true
// Space of O(1) because all created variables are constant
// time of O(n) because we will be looking at each character once

function isAlphanumeric(s) {
    // replace all non alphanumeric sacters with ''
    let string = s.replace(/[^a-zA-Z0-9]/g, '');
    let lower = string.toLowerCase();
    let left = 0;
    let right = lower.length - 1;

    while (left < right) {
        if (lower[left] !== lower[right]) return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}

let s = "Was it a car or a cat I saw?";
console.log(isAlphanumeric(s))