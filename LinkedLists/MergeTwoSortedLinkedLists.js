/*
Merge Two Sorted Linked Lists
Easy
Company Tags
Hints
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:



Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
Example 2:

Input: list1 = [], list2 = [1,2]

Output: [1,2]
Example 3:

Input: list1 = [], list2 = []

Output: []
Constraints:

0 <= The length of the each list <= 100.
-100 <= Node.val <= 100

*/

// Make a new list 0
// while both lists are not null
// compare the two values
// add the value of the lowest number as a node to the new list
// the list the value was taken from gets set to next
// return new list.next

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// thought through myself, pretty much had it on the first idea of a walk through
let mergeTwoLists = (list1, list2) => {
    let res = new ListNode(0);
    let copy = res;

    while (list1 !== null || list2 !== null) {
        let one = list1 ? list1.val : 101;
        let two = list2 ? list2.val : 101;

        if (one < two) {
            copy.next = new ListNode(one);
            list1 = list1.next;
        } else {
            copy.next = new ListNode(two);
            list2 = list2.next;
        }
        copy = copy.next;
    }
    return res.next;
}
// Time of O(n + m) - could say O(n) but this way is more precise because they are dependent on the lengths of each list
// Space of O(1) because we are only making pointers with take up a fixed amount of space.



let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next = new ListNode(5);

console.log(mergeTwoLists(list1, list2));