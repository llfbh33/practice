/*
21. Merge Two Sorted Lists

input - two sorted linked lists
output - merged linked lists - splicing the lists together

make a stored variable for both lists
look at list one and two
which ever val is less is the first
store its next
start a while loop
look at 


*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
};

// in interviews input parameters are offten treated as read-only even if you 
// could technically mutate them - for safty and understanding
const mergeTwoLists = (list1, list2) => {
    let dummy = new ListNode(0);
    let tail = dummy;

    let l1= list1;
    let l2 = list2;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        };
        tail = tail.next;
    };

    tail.next = l1 ? l1 : l2;
    return dummy.next;
};
// Time of O(n + m) as we will be looking at each node n + m times, n and m being the length of the node lists
// Space of O(1) as we are using the nodes previously created


let tree = new ListNode(1);
tree.next = new ListNode(2);
tree.next.next = new ListNode(4);

let tree2 = new ListNode(1);
tree2.next = new ListNode(3);
tree2.next.next = new ListNode(4);

console.log(mergeTwoLists(tree, tree2));