/* 
112. Path Sum

input: root and target
output: boolean

return true if the tree has a root to leaf path such that adding up all the values along the path equals targetSum
A leaf is a node with no children

We want to solve this problem with a depth first search and a stack
The solve will be similar to that of Maximum Depth of a Binary Tree
*/


const hasPathSum = (root, targetSum) => {
    // if tree is empty then there are no root to leaf paths
    if (!root) return false;

    // root val should equal what is left to subtract with no more node children
    if (root.val === targetSum && (!root.left && !root.right)) {
        return true;
    };

    // reduce the target sum as you go by the val of the current root
    // check both the right and left side
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
// Time of O(n) because we will run a function call for each node
// Space of O(h) h being the height of the tree - the amount of function calls on the stack at one time