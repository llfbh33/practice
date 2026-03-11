/*

2. Add Two Numbers


I feel like there was an easier way to do this
The linked lists could be different lengths
we want to run through with addition and push into a string
we need to keep an eye on remainders



*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
};


const addTwoNumbers = (l1, l2) => {
    let res = new ListNode();
    let copy = res;
    let remainder = 0;

    while (l1 !== null || l2 !== null) {
        let l1Val = !l1 ? 0 : l1.val;
        let l2Val = !l2 ? 0 : l2.val;

        let sum = l1Val + l2Val + remainder;

        remainder = Math.floor(sum / 10);            
        let num = sum % 10;                             
        copy.val = num;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

        if (l1 !== null || l2 !== null) {
            copy.next = new ListNode();
            copy = copy.next;
        }
    };
    if (remainder > 0) {
        copy.next = new ListNode(remainder);
    }
    return res;
};