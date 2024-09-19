class Node {
    constructor(value) {
        // Store the value passed to the node
        this.value = value;
        // Pointer to the next node in the queue (initially null)
        this.next = null;
    }
}

class Queue {

    constructor() {
        // The front of the queue, initially null (empty queue)
        this.front = null;
        // The end of the queue, initially null (empty queue)
        this.end = null;
    }

    // Add an element to the end of the queue
    enqueue(value) {
        // Create a new node with the given value
        const newNode = new Node(value);

        // If the queue is empty, both front and end point to the new node
        if (!this.end) {
            this.front = this.end = newNode;
        } else {
            // Otherwise, add the new node to the end and update the end pointer
            this.end.next = newNode;
            this.end = newNode;
        }
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        // If the queue is empty, return null
        if (!this.front) return null;

        // Store the front node to be removed
        const dequeueNode = this.front;

        // Move the front pointer to the next node
        this.front = this.front.next;

        // If the queue is now empty after dequeuing, reset the end pointer
        if (!this.front) this.end = null;

        // Return the value of the dequeued node
        return dequeueNode.value;
    }

    // Get the value of the front element without removing it
    pop() {
        // Return the value of the front node if it exists, otherwise return null
        return this.front ? this.front.value : null;
    }

    // Check if the queue is empty
    isEmpty() {
        // Return true if the front pointer is null, indicating an empty queue
        return this.front === null;
    }
}