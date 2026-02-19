/*
104. Macimum Depth of Binary Tree

input: root of a binary tree
output: the maximum depth

This problem is best solved with a recursive function

adds one to the return as it moves if there is another
*/

function maxDepth(root) {
    if (!root) return 0;                  // return the function if the root does not exist
    // to recurse, return 1 (the traversed level) and the max traversal between the max depth of the right and left
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// Time of O(n) for the use of the Math.max viewing each node n times
// Space of O(1) we are not storing any values 

let root = [3,9,20,null,null,15,7];

// so in the above option we would run through like this:
/*
one: 
return 1 + ------
two && three:
return 1 + 1 + -----
return 1 + 1 + -----
four && five && six && seven:
return 1 + 1 + 0 - recurse returns
return 1 + 1 + 0 - recurse returns
return 1 + 1 + 1 + ----
return 1 + 1 + 1 + ----
eight && nine && ten && eleven:
return 1 + 1 + 1 + 0 - recurse returns 
return 1 + 1 + 1 + 0 - recurse returns
return 1 + 1 + 1 + 0 - recurse returns
return 1 + 1 + 1 + 0 - recurse returns

returns to function 1 with the max value of 3
*/
