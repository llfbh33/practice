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