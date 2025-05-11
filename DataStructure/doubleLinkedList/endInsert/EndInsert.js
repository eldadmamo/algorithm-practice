let head = null;

function EndInsert(val){
    const temp = {data:val, prev: null, next: null};

    if(head == null){
        head = temp
    } else {
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = temp;
        temp.prev = current;
    }
    return temp;
}

console.log(EndInsert(10))


console.log(output);