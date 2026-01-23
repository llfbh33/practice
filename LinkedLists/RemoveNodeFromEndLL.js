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
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;

    while (n > 0) {
        right = right.next;
        n--;
    }

    while (right !== null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(node, 4))