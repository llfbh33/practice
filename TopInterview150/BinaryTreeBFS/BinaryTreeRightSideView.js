/*
199. Binary Tree Right Side View

input: root of a binary tree
output: array of all right side values

*/

function rightSideView(root) {
    // results array
    let res = [];
    // consdition if root does not exist
    if (!root) return res;
    // queue array - root
    let queue = [root];
    // while loop condition of length to the queue
    while (queue.length > 0) {
        // size - variable for length of queue
        let size = queue.length;
        // for loop at size - 1
        for (let i = 0; i < size - 1; i++) {
            // shift off current
            let curr = queue.shift();
            // if current.left exists, queue.push current.left
            if (curr.left) queue.push(curr.left);
            // if current.right exists, queue.push current.right
            if (curr.right) queue.push(curr.right);
            // for loop ends
        };
        // shift off current 
        let curr = queue.shift();
        // if current.left exists, queue.push current.left
        if (curr.left) queue.push(curr.left);
        // if current.right exists, queue.push current.right
        if (curr.right) queue.push(curr.right);
        // results.push current.val
        res.push(curr.val);
        // while loop ends
    };
    // return results
    return res;
};
// Time of O(n) as we will be adding and removing elemnts from each array up to n times, worse case O(n²) as shifting will reindex the array
// Space of O(n) as we will be storing up to n elements per array