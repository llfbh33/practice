/*
19. Remove Nth Node From End of List

Using a pointer system

input - linked list and integer
The integer is the node nth from the last node to remove

Inorder to find the nth node we want 2 pointers
one will start to loop through the nodes, when it loops n times 
we start up another pointer
when the first pointer hits null, the second pointer is on the node to remove
Then all we have to do is save the prev, and set the next of prev to curr.next

node could not exist, make a condition for this

n will not be larger than the number of nodes in the list
and it will be atleast 1, so we will be returning null if there is only one 
node in the list

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
};

// This code works but we can reduce it down by a pointer
const removeNthFromEnd = (head, n) => {
    if (!head || !head.next) return null;

    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    };
    
    slow.next = slow.next.next;

    return dummy.next;
};