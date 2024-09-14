// Problem :
// The goal is to reverse the pointers so that the list runs in the opposite direction.

// Approach 1 : Iterative

function reverseList(head) {
    let prev = null;        // Initialize 'prev' to null
    let current = head;     // Start 'current' at the head of the list
    let next = null;        // Initialize 'next' to null

    while (current) {       // Traverse through the list until 'current' becomes null
        next = current.next;  // Save the next node
        current.next = prev;  // Reverse the link, point current's next to the previous node
        prev = current;       // Move 'prev' to the current node
        current = next;       // Move 'current' to the next node (saved in 'next')
    }

    return prev;             // 'prev' will be the new head of the reversed list
}

// Approach 2 : Recursive

function reverseListRecursively(head) {
    if (!head || !head.next) return head;  // Base case: if list is empty or only one node, return the head

    let newHead = reverseListRecursively(head.next);  // Recursively reverse the rest of the list
    head.next.next = head;  // Make the next node point back to the current node
    head.next = null;  // Set the current node's next to null (it becomes the last node)

    return newHead;  // Return the new head of the reversed list
}