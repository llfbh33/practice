/*
Copy Linked List with Random Pointer
Medium
Company Tags
Hints
You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.

Create a deep copy of the list.

The deep copy should consist of exactly n new nodes, each including:

The original value val of the copied node
A next pointer to the new node corresponding to the next pointer of the original node
A random pointer to the new node corresponding to the random pointer of the original node
Note: None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.

In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.

Example 1:



Input: head = [[3,null],[7,3],[4,0],[5,1]]

Output: [[3,null],[7,3],[4,0],[5,1]]
Example 2:



Input: head = [[1,null],[2,2],[3,2]]

Output: [[1,null],[2,2],[3,2]]
Constraints:

0 <= n <= 100
-100 <= Node.val <= 100
random is null or is pointing to some node in the linked list.
*/

// loop through input list and create a new deep copy without random values
    // while looping map each deep copy node in a hashmap with a key of the og node and the copy node as the value - because some nodes could have the same val
// loop through the input list again, for each random that is not null
    // find the coresponding node in the hashmap and add it to the current node in the deep copy

class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}


let copyRandomList = (head) => {
    let map = new Map();                                // even though an object can be called a map, you have to use an actual Map to use objects as keys
    let store = head;                                   // Store is our pointer that will move, head keeps track of the head of the node 
    let result = new Node(0, null, null);               // first while loop will fully fill result with all nodes without random
    let temp = result;                                  // temp is the pointer at the tail of result

    while (store !== null) {
        temp.next = new Node(store.val, null, null);    // have to update temp.next, if we updated temp itself we get an error, there are no connections made
        map.set(store, temp.next);

        temp = temp.next;
        store = store.next;
    };
    temp = result.next;                                         // reset temp to the head of result

    while (head !== null) {                                     // walk through head and add in random connections
        // find heads random
        let random = head.random;
        // find the random in the map
        if (map.get(random) !== undefined) {                        // leave alone if undefined, all randoms start as null - can not use square bracket notation to access information within Maps
                // map at random is an already created deep copy
                // add the value to temp
            temp.random = map.get(random);
        };
        // advance temp and head
        temp = temp.next;
        head = head.next;
    };

    return result.next;
};
// Time of O(n) - Map.get has a time complexity of O(1) as it will jump directly to the bucket searched for, besides that we use loops but nothing nested
    // it would only be O(n²) if we were iterating through all the keys
// Space of O(n) since we are using a map and will store n amount of entries, one per node
// With space we talk about Auxiliary Space (extra space beyond the input) so that means the coppied nodes and the map count over constant O(1)


let node = new Node(3, 7, null);
node.next = new Node(7, 4, 5);
node.next.next = new Node(4, 5, 3);
node.next.next.next = new Node(5, null, 7);
// node.next.next.next.next = new Node(4);
// node.next.next.next.next.next = new Node(5);
// node.next.next.next.next.next.next = new Node(6);

console.log(copyRandomList(node));