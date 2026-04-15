/*
141. Linked List Cycle

input - linked list
output - boolean

determin if there is a cycle to the list

condition to return false if node is null or next is null
set pointer slow to head
set pointer fast to head
start while loop fast does not equal null
set slow to slow.next
if fast.next === null ? set fast.next to null else set fast to fast.next.next
if fast does not equal null and fast.value equals slow.value
    return true;
exit loop
return false;

*/


const hasCycle = (head) => {
    if (!head) return false;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
};

// Time of O(n) - worst case we will cycle through n nodes
// Space of O(1) - only storing constant values