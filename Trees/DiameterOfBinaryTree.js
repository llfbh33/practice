/*
Diameter of Binary Tree
The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

The length of a path between two nodes in a binary tree is the number of edges between the nodes. Note that the path can not include the same node twice.

Given the root of a binary tree root, return the diameter of the tree.

Example 1:



Input: root = [1,null,2,3,4,5]

Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].

Example 2:

Input: root = [1,2,3]

Output: 2
Constraints:

1 <= number of nodes in the tree <= 100
-100 <= Node.val <= 100
*/

// if there is only the root then the response would be 0


// it is better to solve this problem recursivly because recursive DFS naturally handles post-order traversal
function diameterOfBinaryTree(root) {
    let diameter = 0;

    function depth(node) {
        if (!node) return 0;

        const left = depth(node.left);
        const right = depth(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right)
    }
    
    depth(root);
    return diameter;
}

