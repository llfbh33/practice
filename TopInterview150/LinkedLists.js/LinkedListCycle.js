/*
141. Linked List Cycle

input - the head of a linked list
output - boolean

determine if the linked list has a cycle in it.

Use two pointers the rabbit and tortois method
faster pointer moves by 2
slower pointer moves by 1
If the two are ever on the same node, there is a loop
if there is no next they are not in a loop

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
};




const hasCycle = (head) => {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {            // make sure the nodes still exist - only need to check fast because slow will always be behind
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) return true
    };
    return false;
};

// Time of O(n) fast will catch up to slow in at most a full cycle
// Space of O(1) because the only thing we are saving are constant variables