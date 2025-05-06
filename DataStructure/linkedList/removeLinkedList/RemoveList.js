function RemoveList(head,key){
    if (!head) return null;

    if(val.data == key){
        const newHead = head.next;
        return newHead;
    } 

    else {
        let current = head;
        while(current.next != null){
            if(current.next.data == key){
                current.next = current.next.next;
                return head;
            } else {
                current = current.next;
            }
        }
        return head;
    }
}


const val = [
    { data:5, next: { data: 0, next: null } },
];
const key = 5;
const output = RemoveList(val,key);
console.log(output);