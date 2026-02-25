/*
530. Minimum Absolute Difference in BST

// We want to do a depth first search which produces and inorder response
// we want to check the differnece between the current node and the one before it
// keep a res variable, this is the smallest difference and will be updated as we find a smaller one
// return the res variable

*/
// The problem with this thought process is that the minimum difference could be between
// two nodes which are not connected as parent and child, it could be two nodes on the same
// level but not necessarily touching
    // create variable minDiff at infinity
    // create a stack containing root
    // while the stack has elements
    // stack - pop off current element
    // if there is a curr.right
        // replace minDiff if difference is smaller
        // push curr.right onto the stack
    // if there is a curr.left
        // replace minDiff if difference is smaller
        // push curr.left onto the stack
    // close loop
    // return minDiff



const getMinimumDifference = (root) => {
    // create variable minDiff at infinity
    let minDiff = Infinity;
    // create a stack
    let stack = [];
    // set current variable to root
    let curr = root;
    // create a prev variable to have a comparison
    let prev = null;
    // while loop which only runs if current exists or stack has length
    while (curr !== null || stack.length > 0) {
        // while loop if current exists
        while (curr !== null) {
            // push current onto the stack
            stack.push(curr);
            // set current to current.left
            curr = curr.left;
            // end second while loop
        };
        // set current to element popped off the stack
        curr = stack.pop();
        // compare difference of prev
        if (prev !== null && curr.val - prev < minDiff) minDiff = curr.val - prev;
        // reset prev
        prev = curr.val;
        // set current to current right
        curr = curr.right;   
        // close first while loop
    };
    // return minDiff
    return minDiff;
};
// Time of O(n) because every node is visited once, n times
// Space of O(h) because the stack will hold up to the trees height;