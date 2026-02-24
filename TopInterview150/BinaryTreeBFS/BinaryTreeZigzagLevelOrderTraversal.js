/*
103 Binary Tree Zigzag Level Order Traversal

input: root of binary tree
output: array of each level, first from left to right, then right to left, alternating

*/

const zigzagLevelOrder = (root) => {
    // results array
    let res = [];
    // need a condition for if there is no root
    if (!root) return res;
    // queue array containing the root
    let queue = [root];
    // boolean called left - true 
    let left = true;
    // while loop condition of values in the queue
    while (queue.length > 0) {
        // variable for queue size
        let size = queue.length;
        // array for the results of the current level
        let level = [];
        // loop based on the size of the current level
        for (let i = 0; i < size; i++) {
            // current is queue.shift
            let curr = queue.shift();
            // if current.left then push into queue
            if (curr.left) queue.push(curr.left);
            // if current.right push into queue
            if (curr.right) queue.push(curr.right);
            // if left is true push current.val into level array
            if (left) level.push(curr.val);
            // if left is false unShift current.val into level array
            else level.unshift(curr.val);
            // end for loop
        };
        // alter left value 
        left = !left;
        // push level onto res array
        res.push(level)
        // close while loop
    };
    // return result
    return res;
};
// Time of O(n) as we are adding and removing up to n elements from each array throughout, and we will be looping looking at up to n elements
    // shifting and unshifting could bring it up to O(n²) worst case however
// Space of O(n) because we are storing up to n elements per array


// Prealocating the array instead of using unShift would be a better method as we would not be reindexing the array every other itteration
let level = new Array(size);

for (let i = 0; i < size; i++) {
    let curr = queue.shift();

    let index = left ? i : size - 1 - i;
    level[index] = curr.val;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
}