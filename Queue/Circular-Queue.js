class CircularQueue {

    constructor (k) {
        this.queue = new Array(k);
        this.size = k;
        this.front = 0;
        this.end= -1;
        this.count = 0;
    }

    enqueue(value){
        if(this.isFull()) return false;
        this.end = (this.end + 1) % this.size;
        this.queue[this.end] = value;
        this.count++;
        return true;
    }
    dequeue(){
        if(this.isEmpty()) return false;
        this.front = (this.front + 1) % this.size;
        this.count--;
        return true;
    }
    peekFront(){
        return this.isEmpty() ? -1 : this.queue[this.front];
    }
    isEmpty(){
        return this.count === 0;
    }
    isFull(){
        return this.count === this.size;
    }
}