function ReverseLinkedList(head){
    if(head === null){
     return;  
    }
    ReverseLinkedList(head.next);
    console.log(head);
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

ReverseLinkedList(head);
