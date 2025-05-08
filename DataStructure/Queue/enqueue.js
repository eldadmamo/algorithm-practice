function enqueue(val){
    let front = null;
    let rear = null;

    let temp = {data: val, next: null};

    if(front == null && rear == null){
        front = rear = temp 
    } else {
        rear.next = temp;
        rear = temp
    }

}

const love = enqueue(val);