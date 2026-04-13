/*
21. Merge Two Sorted Lists


input - two sorted linked lists
output - one merged list

Do not create a new list, splice together the two provided lists
Make sure they stay sorted
list lengths will vary


loop through while both lists are not null
if list1 val is less than or equal to list2 val
    list1 = list1.next


make a dummy node and add it as the head to list1
save dummy as a results pointer
make a pointer to prev in list1
current is the first value of list1 - not dummy
keep prev always one ahead of current
while list1 and list2 are not null
    if list1.val is the same or lower set list1 to list1.next
        set prev to prev.next
    if list2.val is lower 
        preserve list2.next
        set list2 to prev.next
        set list1 to list2.next
        preserved list2 is the new list2



*/


const mergeTwoLists = (list1, list2) => {
    let prev = new ListNode(0, list1);
    let result = prev;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            list1 = list1.next;
            prev = prev.next;
        } else {
            const stored = list2.next;
            prev.next = list2;
            prev = prev.next;
            prev.next = list1;
            list2 = stored;
        }
    }

    if (list2 !== null) {
        prev.next = list2;
    }

    return result.next;
};

// Time of O(n + m) - worst case we will fully traverse both lists
// Space of O(1) - Only constant extra points are used

// This solve might be considered a better form than the other, easier to understand
const mergeTwoLists2 = (list1, list2) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next
        } else {
            current.next = list2.next;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 ? list1 : list2;

    return result.next;
};