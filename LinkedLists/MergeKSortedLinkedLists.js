// Merge K Sorted Linked Lists

// start a new list
// 

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    // if we loop through lists then we will be looking at only one list at a time
    // if we loop again then we are looking at each node within one list
    // we could take all from the first
    // start on the second node and figure out where to place the node within the list
    // that would be 3 loops within each other though...
}


let list1 = new ListNode(1);
list1.next = new ListNode(2);

let list2 = new ListNode(3);
list2.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(5);

console.log(mergeKLists([list1, list2, list3]));