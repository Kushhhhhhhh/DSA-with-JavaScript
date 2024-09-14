// Problem : Remove Nth Node from End of List

// Approach 1 : Two Pointers
// We can use a two-pointer technique, where one pointer starts after n nodes, and the other starts from the beginning. When the first pointer reaches the end, the second pointer will be at the node just before the one to remove.

function removeNthFromEnd(head, n) {

    let dummy = {next: head}; // Create a dummy node that points to the head of the list
    let first = dummy;        // First pointer starts at the dummy node
    let second = dummy;       // Second pointer also starts at the dummy node

    // Move the first pointer n+1 steps forward
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end by adjusting the next pointer
    second.next = second.next.next;

    // Return the new head of the list
    return dummy.next;
}