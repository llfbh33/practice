/*
Minimum Stack
Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in 
O
(
1
)
O(1) time.

Example 1:

Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
Constraints:

-2^31 <= val <= 2^31 - 1.
pop, top and getMin will always be called on non-empty stacks.
*/


// non two stack technique
class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);

    };

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return Math.min(...this.stack)
    }
    // Time for getMin is O(n) time for the rest is O(1)
    // Space for getMin is O(n) space for the rest is O(1)
}

let stack = new MinStack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.top()
stack.pop()
stack.getMin()
console.log(stack.getMin())


class MinStack2 {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        // set the value to the minimum of val or stack.length - 1 / this will tell what the min number could be at this length
        // this is the smallest number available, we will pop off the minStack as needed
        val = Math.min(
            val,
            this.minStack.length === 0   // if there is no length then the only number to add is val
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);

    };

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        // Return the last number in minStack
        return this.minStack[this.minStack.length - 1];
    }
    // Time of O(1) for all operations
    // Space of O(n)
}