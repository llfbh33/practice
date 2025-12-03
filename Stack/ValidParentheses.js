/*
Valid Parentheses

You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000
*/

function isValid(s) {
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        
        if (map[s[i]] !== undefined ) {
            if (map[s[i]] === stack[stack.length - 1]) {
                console.log(map[s[i]])
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    if (stack.length > 0) return false;
    return true;
    // Space: O(n). The map is O(1), but in the worst case the stack can grow to size n.
    // Time of O(n) because we are looping through each number max one time
}

let s="([{}])"
console.log(isValid(s))