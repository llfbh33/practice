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

function invertTree(root) {
    // make sure root exists
    // if there is no right and left return what was provided
    // were going to make a stack
    // add the left and right to the stack 
    // switch their places in the current node
    let stack = [root];
    while (stack.length > 0) {
        let rem = stack.pop();
        let newLeft = rem.right;
        let newRight = rem.left;
        rem.right = newRight;
        rem.left = newLeft;
        if (rem.left !== null) {
            stack.push(rem.left)
            stack.push(rem.right)
        }
        
    }
    return root;
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(7);
console.log(invertTree(node));