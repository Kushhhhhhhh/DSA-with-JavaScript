// Problem : Detect Cycle in Linked List

// We can use Floyd's Cycle Detection Algorithm (also known as the Tortoise and Hare algorithm).

// How it works:
// Initialization:

// fast = head: The fast pointer starts at the head of the list.
// slow = head: The slow pointer also starts at the head of the list.
// While loop:

// We run the loop as long as fast and fast.next are not null. This is  important because the fast pointer moves two steps at a time, so we need to check both fast and fast.next to avoid errors.
// Pointer Movement:

// fast = fast.next.next: The fast pointer moves two steps at a time.
// slow = slow.next: The slow pointer moves one step at a time.
// Cycle Detection:

// If fast === slow, it means the fast pointer has caught up to the slow pointer, and there is a cycle in the linked list.
// If the loop terminates without fast and slow meeting, it means the fast pointer reached the end of the list (no cycle exists).

function hasCycle(head) {

    let fast = head;   // Fast pointer (the hare)
    let slow = head;   // Slow pointer (the tortoise)

    while (fast && fast.next) {
        fast = fast.next.next;  // Fast pointer moves 2 steps
        slow = slow.next;       // Slow pointer moves 1 step

        if (fast === slow) return true;  // If both meet, there's a cycle
    }

    return false;  // If fast pointer reaches null, no cycle exists
}