/*
98. Validate Binary Search Tree

input: root of a binary tree
output: boolean

detarmin if the provided binary tree is a binary search tree or not

Do a depth first inorder traversal
as long as the current element is greater than the previous element we have a BST
In this instance the node values can be negitive, be cautious when comparing with initial 
declaration of comparisons

*/

const isValidBST = (root) => {
    // create a stack
    let stack = [];
    // variable for curr
    let curr = root;
    // variable for prev value
    let prev = -Infinity;
    // while curr does not equal null or stack has length
    while (curr !== null || stack.length > 0) {
        // while curr does not equal null
        while (curr !== null) {
            // push curr onto the stack
            stack.push(curr);
            // curr equals curr.left
            curr = curr.left;
            // end second while loop
        };
        // curr is stack popped
        curr = stack.pop();
        // if prev > curr's value return false
        if (prev >= curr.val) return false;
        // set prev to curr
        prev = curr.val;
        // set curr to curr.right
        curr = curr.right;
        // end first while loop
    };
    // reutrn true
    return true;
};
// Time of O(h + n) because we could view up to n nodes, and h in height of the tree
// Space of O(h) h for the height of the stack