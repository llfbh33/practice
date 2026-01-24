/*
Invert Binary Tree
You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]
Example 2:



Input: root = [3,2,1]

Output: [3,1,2]
Example 3:

Input: root = []

Output: []
Constraints:

0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
*/

// make sure root exists
// if there is no right and left return what was provided
// were going to make a stack

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Aubries first solve
function invertTree(root) {
    // make sure root exists
    // if there is no right and left return what was provided
    // were going to make a stack
    // add the left and right to the stack 
    // switch their places in the current node
    if (root === null || root.left === null && root.right === null) return root;
    let stack = [root];
    while (stack.length > 0) {
        let rem = stack.pop();
        // let newLeft = rem.right !== null ? rem.right : null;  // we can reduce all this code to one line
        // let newRight = rem.left !== null ? rem.left : null;
        // rem.right = newRight;
        // rem.left = newLeft;
        [rem.right, rem.left] = [rem.left, rem.right];   // by using destructuring assignment / destructuring swap
        if (rem.left !== null) {
            stack.push(rem.left);
        }
        if (rem.right !== null) {
            stack.push(rem.right)
        }
        
    }
    return root;
    // Time of O(n) because we will look at each node once
    // Space of O(n) because the stack will hold up to n nodes, each of the nodes once
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);
console.log(invertTree(node));