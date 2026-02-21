/*
101. Symmetric Tree

input: root of binary tree
output: boolean

Check if the tree is a mirror of itself or not
can do this recursivly by checking the left and right values on each itteration
if there is no right and left node return true
if the left and right do not match return false

We can not just compare left and right, we need to compare the other end of the tree... 
we can solve this recursivly but I am currently not sure how so lets try to think through this itterativly

*/


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};



function isSymetric(root) {
    // if root is the only node in the tree then return true
    if (!root.right && !root.left) return true;
    // make a stack for the left and stack for the right
    let stack = [[root.left, root.right]];

    // while the two stacks are not empty
    while (stack.length > 0) {
        // compare the nodes popped off the stacks
        let [left, right] = stack.pop();

        if (left === right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        
        // add the nodes and null place holders to the stacks - at this point we know that the current node exists so just push their children
        // make sure to look at left first on the left side and right first on the right side
        stack.push([left.left, right.right]);
        stack.push([left.right, right.left]);
    }
    // exit loop and return true if both stacks are empty
    return true;
};
// Time of O(n) because we will be looking at each node n times
// Space of O(n) because we will be storing each node in the stack max of n times



let one = new TreeNode(1);
one.left = new TreeNode(2);
one.right = new TreeNode(2);
one.right.right = new TreeNode(3);
one.left.right = new TreeNode(3);

console.log(isSymetric(one))