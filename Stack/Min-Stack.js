class MinStack {

    constructor () {
        // Main stack to store all elements
        this.stack = [];
        // Auxiliary stack to store the minimum value at each point
        this.minStack = [];
    }

    push(value){
        this.stack.push(value);

        if(this.minStack.length === 0 || value <= this.getMin()){
            this.minStack.push(value);
        }
    }
    pop () {
        const popVal = this.stack.pop();
        if(popVal === this.getMin()){
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }

    // Retrieve the minimum element in the stack in constant time
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // Output: 3

minStack.pop();
console.log(minStack.getMin()); // Output: 3

minStack.pop();
console.log(minStack.getMin()); // Output: 5