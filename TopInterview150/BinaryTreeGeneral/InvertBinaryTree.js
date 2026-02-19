/*
226 Invert Binary Tree

Swap the left and right roots

*/

function invertTree(root) {
    if (!root) return root;
    let stored = root.left;
    root.left = root.right;
    root.right = stored;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}
// Time O(n) because we are interacting with each node n times
// Space O(h) for the height of the recursive stack