/*
206. Reverse Linked List

input - linked list
output - linked list

reverse the linked list and return

create a variable called post set to head.next - this will also be our return node at the end
Enter a while loop - head.next is not null
set post to head.next
set head.next to post.next
set post.next to head
exit loop
return post

newNext is our pointer holding a node outside of the list all other pointers work within the list

*/

// personal solve - tracks head as it moves nodes to the front
const reverseList = (head) => {
    if (!head) return head;

    let post = head.next;
    let prev = head;

    while (post !== null) {
        head.next = post.next;
        post.next = prev;
        prev = post;
        post = head.next;
    }

    return prev;
};

// Time of O(n) we will loop n times
// Space of O(1) we are mutating in place


// more widely used solve - walks through the list flipping nodes to the front as they are viewed 
const reverseList2 = (head) => {
    if (head === null) return null;

    let prev = null;
    let curr = head;

    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
};