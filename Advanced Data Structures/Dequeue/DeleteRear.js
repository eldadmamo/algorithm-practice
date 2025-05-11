function DeleteRear(){
    if(rear == null){
        console.log("No Value is found")
    } else {
        rear = rear.prev;
        if(rear != null){
            rear.next = null;
        }
    }
}

const love = DeleteRear();
console.log(love)