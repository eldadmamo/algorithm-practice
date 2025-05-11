function DeleteDequeue(){
    if(front == null){
        console.log("Deque is Empty")
    } else {
            front = front.next;
            if(front != null){
                front.prev = null;
            }
    }
}

const love = DeleteDequeue();
console.log(love);
