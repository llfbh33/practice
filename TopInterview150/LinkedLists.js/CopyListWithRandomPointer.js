/*

138. Copy List with Random Pointer


input - linked list head
output - deep copy of linked list


utilize a map to find corresponding nodes
key - original node
val - deep copy
two loops, first for the basic list
    second for the random 

condition if the node is null
create a new map
make a curr of the head
make a dummy node
make a copy - value of dummy node
while loop - condition of curr !== null
copy.next - create new node, value of curr
add curr to map with val of the new node
copy will be copy.next
curr will be curr.next
end loop
set curr to head
set copy to dummy.next
while condition of curr does not equal null
find the value of the curr.random in the map
create a new node with the value
set as the random to copy
set curr to curr.next
set copy to copy.next
end loop
return dummy.next


*/

class _Node {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
};


const copyRandomList = (head) => {
    // condition if the node is null
    if (!head) return null;
    // create a new map
    let map = new Map();
    // make a curr of the head
    let curr = head;
    // make a dummy node
    let dummy = new _Node();
    // make a copy - value of dummy node
    let copy = dummy;
    // while loop - condition of curr !== null
    while (curr !== null) {
        // copy.next - create new node, value of curr
        copy.next = new _Node(curr.val);
        // add curr to map with val of the new node
        map.set(curr, copy.next);
        // copy will be copy.next
        copy = copy.next;
        // curr will be curr.next
        curr = curr.next;
        // end loop
    };
    // set curr to head
    curr = head;
    // set copy to dummy.next
    copy = dummy.next;
    // while condition of curr does not equal null
    while (curr !== null) {
        // find the value of the curr.random in the map
        let node = map.get(curr.random);
        // set as the random to copy
        copy.random = node;
        // set curr to curr.next
        curr = curr.next;
        // set copy to copy.next
        copy = copy.next;
        // end loop
    };
    // return dummy.next
    return dummy.next;
};

// Time of O(n) because we will be going through each node n + n times
// Space of O(n) because we are using a map

// The above solution can be cleaned up a little by first placing all nodes in a map while creating the
// deep copy of that node, then running through just once to add all next's and random's