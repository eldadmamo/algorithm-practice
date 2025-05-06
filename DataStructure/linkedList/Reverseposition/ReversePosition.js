function reverse(head) {
    let current = head;
    let prev = null;
    let next;

    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
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

const output = reverse(head);
console.log(output);