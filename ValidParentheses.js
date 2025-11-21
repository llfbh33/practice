/*
20. Valid Parentheses - Explanation
Problem Link

Description
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

// check that each opening bracket has a corresponding closing bracket
    // use a map to match open and closing brackets together
// Need to make sure that the brackets close in the proper order
    // use a stack, first in last out

const validParentheses = (s) => {
    const stack = [];
    const map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }

    for (let i = 0; i < s.length; i++) {
        if (Object.values(map).includes(s[i])) {
            stack.push(s[i])
        } else {
            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
}

let s = "([{}])"
let str = "[(])"
let string = "([{}]))"

console.log(validParentheses(string))