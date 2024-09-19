// Definition of the Node class
class Node {
    constructor(value) {
        // this.value will store the data of the node
        this.value = value;
        // this.next will store a reference to the next node in the stack
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    // Push a new element onto the stack
    push(value) {
        // Create a new Node with the given value
        const newNode = new Node(value);
        // Set the next property of the new node to the current top node
        newNode.next = this.top;
        // Update the top node to the new node
        this.top = newNode;
    }
    // Pop (remove) the top element from the stack
    pop() {
        // If the stack is empty, return null
        if (this.top === null) return null;
        // Store the current top node
        const popNode = this.top;
        // Update the top node to be the next node
        this.top = this.top.next;
        // Return the value of the popped node
        return popNode.value;
    }
    // Return the value of the top element without removing it
    peek() {
        // If the stack is not empty, return the value of the top node; otherwise, return null
        return this.top ? this.top.value : null;
    }

    // Check if the stack is empty
    isEmpty() {
        // Returns true if the top node is null, indicating an empty stack
        return this.top === null; // Fix: Should use '===' to compare, not assignment '='
    }
}