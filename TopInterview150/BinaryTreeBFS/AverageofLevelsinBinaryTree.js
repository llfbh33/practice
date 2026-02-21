/*
637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array
Round out to 5 decimal places

BFS uses a queue
a queue of arrays
The first array is the root
loop through the array and add all the children to a new array
after adding all children, push into the queue
create an output
or just set the array as the new queue once the queue is empty

*/

//while the queue is not empty
// grab the next array in the queue
// loop over the array
// add the values up while adding children to the new array
// end the loop and push the new array into the queue if it is not empty
// return the values in array format

const averageOfLevels = (root) => {
    // will always be one node in the tree so we do not need a condition for it
    let res = [];
    let queue = [[root]];

    while (queue.length > 0) {
        let newQueue = [];
        let value = 0;
        let level = queue.shift();

        for (let i = 0; i < level.length; i++) {
            let curr = level[i]
            value += curr.val;

            if (curr.left) {
                newQueue.push(curr.left)
            }
            if (curr.right) {
                newQueue.push(curr.right)
            }
        };
        res.push(Math.round((value / level.length) * 100000) / 100000);
        if (newQueue.length > 0) queue.push(newQueue);
    }
    return res;
};

// it is usually better to track the size of the queue before creating the nested loop and going 
// from there rather than making nested array