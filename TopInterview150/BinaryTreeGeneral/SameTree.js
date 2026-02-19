/*
100. Same Tree

input: two binary tree roots
Check if the trees are the same or not
output: boolean

There can be 0 nodes in the tree
*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};
// solved recursivly
const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// Time of O(n) because we will be looking at each node, a total of n times
// Space of O(h) - h being the height of the stack of recursed functions

let one = new TreeNode();
one.left = new TreeNode(1);
one.right = new TreeNode(2);

let two = new TreeNode();
two.left = new TreeNode(1);
two.right = new TreeNode(2);
// two.right.right = new TreeNode(3);

console.log(isSameTree(one, two))

// can also solve this problem with a DFS or a BFS