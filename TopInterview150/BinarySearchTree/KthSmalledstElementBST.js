/*
230. Kth Smallest Element in a BST

input: root of a BST, integer k
output: kth smallest value, (1-indexed), value of the node at the kth index

*/


function kthSmallest(root, k) {
    // create a stack
    let stack = [];
    // create a curr variable - root
    let curr = root;
    // create a value variable - 0
    let value = 0;
    // while k > 0 
    while (k > 0) {
        // while curr exists
        while (curr !== null) {
            // push curr onto the stack
            stack.push(curr);
            // set curr to curr.left
            curr = curr.left;
            // end second while loop
        };
        // set curr to stack popped
        curr = stack.pop();
        // set value to curr.val
        value = curr.val;
        // reduce k by 1
        k--;
        // set curr to curr.right
        curr = curr.right;
        // end first while loop
    };
    // return value
    return value;
};
// Time of O(h + k) - Go down the height of the tree, h, and visit k nodes - worst case O(n)
// Space of O(h) - h being the height of the stack


// Example of how to solve this problem using Morrison Traversal
function kthSmallest2(root, k) {
    let curr = root;
    let count = 0;

    while (curr !== null) {

        // Case 1: No left child
        if (curr.left === null) {
            count++;
            if (count === k) return curr.val;
            curr = curr.right;
        } 
        
        // Case 2: Has left child
        else {
            // Find inorder predecessor (rightmost of left subtree)
            let predecessor = curr.left;

            while (predecessor.right !== null && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }

            // If no thread exists, create one
            if (predecessor.right === null) {
                predecessor.right = curr;   // create temporary link
                curr = curr.left;
            } 
            
            // If thread already exists, remove it and visit node
            else {
                predecessor.right = null;   // remove temporary link
                count++;
                if (count === k) return curr.val;
                curr = curr.right;
            }
        }
    }

    return null; // fallback (shouldn't hit if k is valid)
}