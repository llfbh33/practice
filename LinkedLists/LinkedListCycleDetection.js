/*
Linked List Cycle Detection
Easy
Company Tags
Hints
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

Note: index is not given to you as a parameter.

Example 1:



Input: head = [1,2,3,4], index = 1

Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:



Input: head = [1,2], index = -1

Output: false
Constraints:

1 <= Length of the list <= 1000.
-1000 <= Node.val <= 1000
index is -1 or a valid index in the linked list.
*/

// if the tail node points back to a node in the list, if it is not a singularly linked list return true
// for this problem we want to use a detection algorithm.  This helps to detect if there will be a continuous loop
// Floyd's tortoise and hare


// --------- FIRST WHITEBOARD -----------
// set a slow pointer to head
// set a fast pointer to head.next - if null return false
// make a loop
// set fast to fast.next, if it is the same as slow return true
    // if it is null return false
    // set fast to fast.next again - if it is the same as slow return true
    // if it is null return false
// set slow to slow.next, if it is the same as fast return true
// repeat the loop


function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {       // Check for both the current and the next since we will be skipping 2 at a time to reduce code
        // we know slow.next is not null because fast.next is not null - slow.next will never be null in this loop
        slow = slow.next;
        // jump ahead twice, do not check at each next, the while loop is doing that for us
        fast = fast.next.next;
        // If slow and fast are the same we have a cyclical pattern
        if (slow === fast) return true;
    };
    // if the loop exits we do not have a cyclical pattern
    return false;
}
// Time of O(n) - fast will catch up to slow in at most a full cycle
// Space of O(1) - we are only saving pointers, fixed space

// Could also run this problem with a hash set and keep track of the nodes which have been visited before
// This solution is clean and reliable however it would have a space of O(n) which we can do better than