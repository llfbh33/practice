/*
Reverse Linked List
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]
Example 2:

Input: head = []

Output: []
Constraints:

0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000
*/

// pointers are necessary since we will only be able to go forward not backward

// return null if there is no head
// create a pointer for the head as new head
// if there is a head.next
    // then set the newHead to head.next recursed
    // then set head.next.next to be head
// end by clearing the new last nodes nexts - head.next = null;
// return the new head

 class ListNode {
    constructor(val = 0, next = null) {
         this.val = val;
         this.next = next;
     }
 }

 // This function does reverse and solves the problem, but it does not reverse in place, there is a more optimal solution
function reverseList(head) {
    let result;
    let list = null;

    while (head !== null) {
        result = new ListNode(head.val, list)
        list = result
        head = head.next;
    }
    return result;
}
// Time of O(n)
// Space of O(n)


let node = new ListNode(1);                      
node.next = new ListNode(2);                    
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);                    
node.next.next.next.next = new ListNode(5);
           
                                    
// console.log(reverseList(node));

function reverseList2(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    };
    return prev;
}
// Time of O(n)
// Space of O(1) only a few pointers are used; no extra nodes are created - Even though the pointers are re-assigned n amount of times they take a fixed amount of memory (one reference per pointer)

// console.log(reverseList2(node))


console.log(node)
let head = node;
let curr = node.next;
let temp = curr.next;
node.next.next.next = null;
console.log(head);
console.log(curr)
console.log(temp);
console.log(node)