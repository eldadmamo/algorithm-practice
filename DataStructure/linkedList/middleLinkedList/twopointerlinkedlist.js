function MiddlelinkedList(head){
    let fast,slow;
    slow = fast = head;

    if(head){
        while(slow!=null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
    return -1
}






const head = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 5,
            next: {
                data: 7,
                next: {
                    data: 0,
                    next: null
                }
            }
        }
    }
};

const love = MiddlelinkedList(head);
console.log(love);