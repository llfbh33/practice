/*
102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes values, from left to right

Create a results array
Create a queue
While the queue is not empty
track the length of the queue
create a level array
start a second loop based on the length of the queue
add the value of the curr node to the level array
push the children nodes into the queue from left to right
close the loop
push the level array into res
close the while loop
return res

*/

const levelOrder = (root) => {
    if (!root) return [];
    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            level.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        };
        res.push(level);
    };
    return res;
}