/*
92. Reverse Linked List II

input: head of a list - 2 integers left and right
output: head of list where the 2 nodes with the integer values are swapped

There will always be a node so we do not need a condition for if it is null
The values of the integers could be numbers which are not contained in the list 1 - n
    with n being the amount of nodes contained within the list


make a pointer curr from head
move untill we find the left integer as a value
    make a pointer of the prev node and the current left node
keep moving until you find the right integer value
    make a pointer of the current right node
replace the next of the prev node with the right
replace the next of the right with the current left.next
find the next itteration of right in there

// integers are going to be 1 through n so we do not need to
// take into account that we might not find the left or right

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
};



const reverseBetween = (head, left, right) => {
    // return if left and right are the same integer, no switching will be necessary
    if (left === right) return head;

    // By setting a dummy node in front we can cover edge cases where left is 1
    let dummy = new ListNode(0, head);
    let prev = dummy;                       // 1

    // move prev to the node just before 'left'
    for (let i = 1; i < left; i++) {
        prev = prev.next
    };

    let curr = prev.next;                   // 2

    // reverse the nodes between left and right
    for (let i = 0; i < right - left; i++) {            // 2  // 1
        let next = curr.next;                           // 3  // 4
        curr.next = next.next;                          // 4  // 5
        next.next = prev.next;                          // 2  // 3
        prev.next = next;                               // 3  // 4
    }

};




let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
node1.next.next.next = new ListNode(4);
node1.next.next.next.next = new ListNode(5);

console.log(reverseBetween(node1, 2, 4));