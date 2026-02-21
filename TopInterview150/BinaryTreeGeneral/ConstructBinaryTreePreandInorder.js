/*
105. Construct Binary Tree from Preorder and Inorder Traversal

Take in two arrays,  preorder and inorder
create a binary tree and return
use the setup within the arrays to understand how to create the structure of the tree
think about how you extract values from a tree with preorder and inorder traversal
inorder to understand how to use those values backwards

First make a node for the root.  The root will be the first value within preorder
    as preorder is set to level by level - this is the only node that we know for sure where it goes at a glance
We can not determin that the next two elements are the left and right as there may not be a left or right node

Okay, so we know with preorder that the first element will always be the root, so we start by making the root 
node - we want to make sure not to reset this variable to point to a different node as this is the node we will 
be returning at the end.

In the inorder array we know that all the elements to the left of the root node value are on the left side of the binary tree
So we look at the next number in the preorder array, if it is on the left of the current node in inorder array then it is 
the left node, other wise it is the right node


Preorder controls which node comes next 
Inorder controls where the boundry is

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};

function buildTree(preorder, inorder) {
    // Make a root node with the first element of preorder traversal
    let root = new TreeNode(preorder[0]);
    // Make a current pointer to track the current node
    let curr = root;

    // loop through all the elements in the arrays (they are both the same length)
    for (let i = 1; i < preorder.length; i++) {
        // check if preorder[i] is on the left or right side of curr.val in inorder
        // if left, add as the left node of curr
        // if right, add as right node of curr
        // update curr to preorder[i]
    }

};

function buildTree2(preorder, inorder) {
    // Make a root node with the first element of preorder traversal
    console.log(preorder)
    let root = new TreeNode(preorder[0]);

    let currIndex = inorder.indexOf(preorder[0]);
    let nextIndex = inorder.indexOf(preorder[1]);
    console.log(nextIndex)

    if (nextIndex < currIndex) {
        root.left = new TreeNode(preorder[1])
    } else if (nextIndex > currIndex) {
        console.log('he')
        root.right = new TreeNode(preorder[1])
    };
    preorder.shift();
    // inorder.splice(currIndex, 1);

    if (preorder.length > 0) {
        buildTree2(preorder, inorder);
    } 
    
    return root;
};

// Recursive solve
function buildTree3(preorder, inorder) {
    let preorderIndex = 0;                              // track the index of the current node

    const inorderMap = new Map();                       // create a map to make pairs between values and indices
    for (let i = 0; i < inorder.length; i++) {          // for each element in inorder, match it with its index
        inorderMap.set(inorder[i], i);
    }

    function helper(left, right) {                      // Make a recursive helper function that takes in pointers of inorder on either end
        if (left > right) return null;                  // return if left is greater than right

        const rootVal = preorder[preorderIndex++];      // root stands for the current node we are looking at, increase the index after to have it set for the next node
        const root = new TreeNode(rootVal);             // create this node

        const inorderIndex = inorderMap.get(rootVal);   // get the index for the current node in the map

        // set the root.left and root.right to the returned root
        root.left = helper(left, inorderIndex - 1);     // left and right are the parameters of what might belong within the left side
        root.right = helper(inorderIndex + 1, right);   // left and right are the parameters of what might belong within the right side

        return root;                                    // return the root, only the initial root will be returned
    }

    return helper(0, inorder.length - 1);
};

// itterative solve
function buildTree4(preorder, inorder) {
    if (!preorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let stack = [root];
    let inorderIndex = 0;

    for (let i = 1; i < preorder.length; i++) {
        let node = stack[stack.length - 1];
        let newNode = new TreeNode(preorder[i]);

        if (node.val !== inorder[inorderIndex]) {
            node.left = newNode;
            stack.push(newNode);
        } else {
            while (
                stack.length &&
                stack[stack.length - 1].val === inorder[inorderIndex]
            ) {
                node = stack.pop();
                inorderIndex++;
            }
            node.right = newNode;
            stack.push(newNode);
        }
    }

    return root;
}

let pre = [3,9,20,15,7];
let order = [9,3,15,20,7];
console.log(buildTree3(pre, order));


/*
Tree:                           {
                                    4 : 0
        1                           2 : 1
       / \                          5 : 2
      2   3                         1 : 3
     / \                            3 : 4
    4   5                       }
preorder = [1,2,4,5,3]
inorder  = [4,2,5,1,3]

output   = [1,2,3,4,5]

-------------------

Tree:

        4
       /
      3
     /
    2
   /
  1
preorder = [4,3,2,1]
inorder  = [1,2,3,4]

output   = [4,3,null,2,null,1]

-------------------

Tree:

        8
       / \
      5   10
     / \    \
    1   7    12

preorder = [8,5,1,7,10,12]
inorder  = [1,5,7,8,10,12]

output   = [8,5,10,1,7,null,12]
*/