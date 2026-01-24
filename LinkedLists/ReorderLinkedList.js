/*
Reorder Linked List
Medium
Company Tags
Hints
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:

Input: head = [2,4,6,8]

Output: [2,8,4,6]
Example 2:

Input: head = [2,4,6,8,10]

Output: [2,10,4,8,6]
Constraints:

1 <= Length of the list <= 1000.
1 <= Node.val <= 1000

*/

// combine the previous problems to solve this problem
// use Linked List Cycle Detection fast and slow method to find the middle
// split the list in the middle - list1, list2
// use Reverse Linked Lists on the second list
// combine the lists like Merge Two Sorted Linked Lists but just alternate instead of going with the lowest value


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

let reorderList = (head) => {
    // Linked List Cycle Detection - fast and slow to find the middle
    let list1 = head;
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    };
    let prev = slow.next;
    slow.next = null;

    // Reverse Linked Lists - reverse prev
    let list2 = null;
    let curr = prev;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = list2;               // Make sure to clear the next on your curr node
        list2 = curr;
        curr = temp;
    };

    // Merge Two Sorted Lists - alternate starting with list one
    // a safer way to merge the lists, no next.next.  easier to refactor in the future without breaking
    let l1 = list1;
    let l2 = list2;

    while (l2 !== null) {
        let next1 = l1.next;        // save the rest of the sequence of l1
        let next2 = l2.next;        // save the rest of the sequence of l2

        l1.next = l2;               // l1.next is rewritten with the rest of l2
        l2.next = next1;            // l2.next is the same as l1.next.next now so rewrite with the rest of the l1 sequence

        l1 = next1;                 // update the lists to next
        l2 = next2;
    }
    return list1;                   // list1 is the pointer to the head of the linked list we want to return
};
// Time of O(n) no nested loops - O(n + n/2 + n/2)
// Space of O(1)

let node = new ListNode(0);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(4);
node.next.next.next.next.next = new ListNode(5);
// node.next.next.next.next.next.next = new ListNode(6);

console.log(reorderList(node))


