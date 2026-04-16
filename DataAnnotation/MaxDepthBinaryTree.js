/*
104. Maximum Depth of Binary Tree

input - binary tree
output - integer



condition to return 0 if root is null

you do not neeeed to do this recursivly, I just know that the code for it is much more simple
If we were to solve this problem recursivly we would use a stack but not just a basic stack, we
are going to keep tabs on how many elements to remove in a while loop.  We are doing this so that 
we can keep track of what level of the search tree we are currently looking at.  Once we have 
looked at each element in the search tree our count will be that of the furthest level

while there is length to the stack continue
then a loop that loops the amoount of the length of the array


*/


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


// less common / recognizable solve
const maxDepth = (root) => {
    let count = 0;
    let queue = root === null ? [] : [root];

    while (queue.length > 0) {
        const view = queue;
        queue = [];
        count++;

        while (view.length > 0) {
            let curr = view.pop();

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
    }

    return count;
};

// Time: O(n) — each node is processed once
// Space: O(w) — stores up to one level of nodes at a time, worst case O(n)


let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.right.right = new TreeNode(5);


console.log(maxDepth(tree))


// does not use shift so it is O(n) not O(n²), uses pointers to access the correct indices as function moves
const maxDepth2 = (root) => {
    let queue = [root];
    let i = 0;
    let count = 0

    while (i < queue.length) {
        let size = queue.length - i;
        count++;

        for (let j = 0; j < size; j++) {
            let curr = queue[i++];

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return count;
}