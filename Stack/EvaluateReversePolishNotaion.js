/* 
Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
Example 1:

Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
Constraints:

1 <= tokens.length <= 1000.
tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].
*/


function evalPRN(tokens) {
    // going to need a stack 
    let stack = [];

    // add to the stack untill an operand is found
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(parseInt(tokens[i]))){
            stack.push(parseInt(tokens[i]));
        } else {
            let second = stack.pop();
            let first = stack.pop();
            // set up a swith to create the operation
            switch(tokens[i]) {
                case '+' : stack.push(first + second); 
                    break;
                case '-' : stack.push(first - second); 
                    break; 
                case '*' : stack.push(first * second); 
                    break;
                case '/' : stack.push(Math.trunc(first / second)); 
                    break;
            }
        }
    }
    // when we run into an operand the first number to pop off the stack will be a and the second is b  ==> b (operand) a
    return stack[0];
    // Time of O(n) because we look at each number once
    // Space of O(n) because the amount of things recorded is capped based on the size of the input array
}
let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalPRN(tokens))