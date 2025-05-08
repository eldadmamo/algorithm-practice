function deleteCircular(head,key){
    if(head == null){
        return;
    }

    if(head.data == key && head.next == head){
        head = null;
    }

    if(head.data == key){
        let last = head;
        while(last.next != key){
            last = last.next
        }
        last.next = head.next;
        head = head.next
    };

    let current = head;
    do{
        if(current.next.data == key){
            const deleteNode = current.next;
            head.next = deleteNode.next;
        }
        current = current.next;
    }while(current!=head);
}


const head = {data:1};
const key = 1;

const output = deleteCircular(head,key);
console.log(output);