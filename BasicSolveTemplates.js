// DFS Template recursive

function dfsRecursive(root) {
    if (root === null) return;

    dfsRecursive(root.left);
    dfsRecursive(root.right);
};

// DFS Template Iterative

function dfsIterative(root) {
    if (!root) return;

    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}