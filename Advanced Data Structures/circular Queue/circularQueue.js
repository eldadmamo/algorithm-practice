class Queue {
    constructor(size) {
        this.SIZE = size;
        this.arr = new Array(this.SIZE);
        this.front = -1;
        this.rear = -1;
    }

    enQueue(value){
        if(this.QueueFull()){
           console.log("Queue is full")
           return false;
        }
        if(this.front == -1){
            this.front = 0
        }
        this.rear = (this.rear+1) % this.SIZE;
        this.arr[this.rear] = value;
        return this.arr;
    }

    deQueue(){
        if(this.isQueueEmpty()){
            console.log("Queue is Empty")
            return undefined;
        }
        const val = this.arr[this.front];
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }
        this.front = (this.front+1) % this.SIZE;
        return this.arr[this.front];
    }

    QueueFull(){
        if(this.front === 0 && this.rear === this.SIZE - 1){
            return true;
        }
        if(this.rear === this.front -1){
            return true;
        }
        return false;
    }

    isQueueEmpty() {
        return this.front === -1;
    }
}

const q = new Queue(3);

console.log(q.enQueue(10)); 
console.log(q.enQueue(20)); 
console.log(q.enQueue(30)); 
console.log(q.deQueue(10));   
console.log(q.enQueue(40)); 