/*
Remove Node From End of Linked List
Medium
Company Tags
Hints
You are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.

Example 1:

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
Example 2:

Input: head = [5], n = 1

Output: []
Example 3:

Input: head = [1,2], n = 2

Output: [2]
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

 class ListNode {
    constructor(val = 0, next = null) {
         this.val = val;
         this.next = next;
     }
 }

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);    // Adding a node infront of head guarantees uniform node removal (node 0 is a space holder for precision of distance, adds a safe node before head so removal never needs a special case)
    let left = dummy;                       // Create a pointer for dummy so we don't lose dummy
    let right = head;                       // Create a pointer for head so we do not lose head

    while (n > 0) {                         // While n is greater than 0
        right = right.next;                 // Set the right pointer to next inorder to create a fixed gap from the head
        n--;                                // subtract from n
    }

    while (right !== null) {                // Right currently has a gap of n from head, shift together with left
        left = left.next;                   // Move left pointer till right is null, maintaining the fixed gap
        right = right.next;                 // Once right is null left.next will be the nth node
    }                                       // Keeping right n nodes ahead means when it hits the end, left must be positioned right before the node to remove.

    left.next = left.next.next;             // Remove left.next from the linked list
    return dummy.next;                      // Return from the head
}
// Time of O(n) If runtime grows because input grows, it’s not constant time.
// Space: O(1) — adding a constant number of nodes (even more than one)
// and using a few pointers does not depend on input size
// constant means there is no dependency on input size

let node = new ListNode(1);                     // right - 4  left 
node.next = new ListNode(2);                    // right - 3
node.next.next = new ListNode(3);               // right - 2
node.next.next.next = new ListNode(4);          // right - 1
node.next.next.next.next = new ListNode(5);     // right - 0
                                                // right = null
console.log(removeNthFromEnd(node, 4));

