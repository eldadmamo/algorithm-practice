function dequeue(){
    let temp;

    if(front == null){
        console.log("Queue is empty")
    } else {
        temp = front;
        front = front.next;
        
    }
}

const output = dequeue(val);
console.log(output);