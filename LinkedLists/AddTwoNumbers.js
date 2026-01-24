/*
Add Two Numbers
Medium
Company Tags
Hints
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 321 is represented as 1 -> 2 -> 3 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

Example 1:



Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.
Example 2:

Input: l1 = [9], l2 = [9]

Output: [8,1]
Constraints:

1 <= l1.length, l2.length <= 100.
0 <= Node.val <= 9
*/

// questions
// can we assume that each linked list is the same length? - no

// create a new list with a dummy head
// loop throgh the lists untill both are null
// add the values of the nodes we are focused on, if there is no value, the only node with a value is added
// If the value is higher than 10 we store the first diget in the new node and carry the rest of the digets to the next round
// once the loop ends if there is a value in carry, add a last diget to the list - maybe create a tiny loop for this incase carry is larger than 10
// return list.next
// carry will always be 0 or 1 since we are working with single digets so we do not need a loop for carry at the end

// Iterate while either list exists, sum the digets plus carry, create a node with sum % 10, update carry with Math.floor(sum/10), and append a final node if carry remains


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let result = new ListNode(0);                   // create a dummy node to start our list
    let copyRes = result;                           // create a pointer for the tail to add nodes to our result
    let carry = 0;                                  // We need a carry variable to hold carried over values

    while (l1 !== null || l2 !== null) {          // or because we need both lists to be null before moving on
        let one = l1 !== null ? l1.val : 0;         // grab either the value or 0 if the node is null
        let two = l2 !== null ? l2.val : 0;
        let sum = one + two + carry;                 // find the sum of the two numbers and our carried over number     
        let value = sum % 10;                       // find the value of the new node (9 or less by finding the remainder when dividing by 10, modulo)
        carry = Math.floor(sum/10);                 // set carry to be 0 or 1 - the floor of sum divided by 10, floor to remove any remaining decimals

        copyRes.next = new ListNode(value);         // create the new node
        copyRes = copyRes.next;                     // Move copyRes pointer to the tail 
        l1 = l1 !== null ? l1.next : null;          // if l1 or l2 are already null there will not be a next and we would throw an error if we do not check
        l2 = l2 !== null ? l2.next : null;
    };

    if (carry > 0) {                                // if carry still has a value
        copyRes.next = new ListNode(carry);         // create one more node on the list
    };

    return result.next;                             // return without the dummy node
};
// Time of O(n) - no nested loops, use of a method but it is a constant method not a compounding one - each iteration does constant work
// Space of O(n) - Because we will store a max of l1 or l2 nodes - up to n + 1


let node = new ListNode(3);
node.next = new ListNode(1);
node.next.next = new ListNode(2);
node.next.next.next = new ListNode(3);
node.next.next.next.next = new ListNode(4);
node.next.next.next.next.next = new ListNode(5);

let node2 = new ListNode(0);
node2.next = new ListNode(1);
node2.next.next = new ListNode(2);
node2.next.next.next = new ListNode(3);
node2.next.next.next.next = new ListNode(4);
node2.next.next.next.next.next = new ListNode(5);

console.log(addTwoNumbers(node, node2))