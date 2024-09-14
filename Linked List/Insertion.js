// Insertion in Linked List

// At the beginning
// How it works:
// Step 1: A new node is created with the given data. This new node's next pointer is set to point to the current head of the list.
// Step 2: This newly created node becomes the new head of the linked list, so the function returns the newNode.

function insertAtBeginning  (head, data) {
    let newNode = { data: data, next: head };
    return newNode;
}

// At the end
// How it works:
// Step 1: A new node is created with the given data. The next pointer of this node is set to null because it will be the last node.
// Step 2: If the list is empty (head is null), the new node becomes the head of the list, and the function returns it.
// Step 3: If the list is not empty, the function traverses through the linked list until it finds the last node (current.next === null).
// Step 4: The new node is appended at the end, and the modified linked list is returned.

function insertAtEnd(head, data) {
    let newNode = { data: data, next: null };
    if(!head) return newNode; // If the list is empty, the new node becomes the head.

    let current = head; // Start with the head of the list
    while(current.next) { // Traverse the list
        current = current.next; // Move to the next node
    }

    current.next = newNode; // Add the new node at the end
    return head;
}