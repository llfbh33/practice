/*
20. Valid Parentheses

input - string
output - boolean


Algorithm - Stack

make a relations object
    closing brackets are keys
    opening brackets are values

make a stack
loop through the string
if s[i] does not exist in the object, push it to the stack
if it does exist, pop the last element off the stack
if that popped value is not the corresponding value, return false
continue
if there is a length to stack return false, else return true

*/

const isValid = (s) => {
    const relations = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    const stack = [];

    for (let char of s) {
        if (!relations[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (relations[char] !== top) return false;
        }
    }

    return stack.length === 0;
};

// Time of O(n) - We will be examining each char (n) of the string
// Space of O(1) - the stack can store up to n characters in the worst case