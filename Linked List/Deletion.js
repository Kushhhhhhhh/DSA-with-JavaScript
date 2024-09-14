// Deletion in Linked List

// At the beginning

// What happens:

// The function checks if head is null. It's not, so we proceed.
// The current head points to the node with data 3.
// The function returns head.next, which points to the node with data 4, making it the new head.

function deleteAtBeginning(head) {
    if(!head) return null;  // If the list is empty, return null.
    return head.next; // Move the head to the next node and return it.
}

// At the end

//Step-by-step Execution:

// The function checks if head is null or if head.next is null (meaning only one node exists). Since neither is true, we continue.
// A current variable is initialized and set to point to the head.
// The while (current.next.next) loop runs:
// First iteration:
// current is pointing to the node with data 3.
// current.next.next is not null (it points to the node 5), so we move current to the next node.
// Second iteration:
// current is now pointing to the node with data 4.
// current.next.next is null (the next node is the last one), so we stop the loop.
// The current.next is now set to null, effectively removing the last node (5).

function deleteAtEnd(head) {
    if (!head || !head.next) return null;  // If the list is empty or has only one node, return null.

    let current = head;
    while (current.next.next) {  // Traverse until current points to the second last node.
        current = current.next;
    }
    current.next = null;  // Remove the reference to the last node.
    return head;
}