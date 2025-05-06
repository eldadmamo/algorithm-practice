function IndexLinked(head,index){
    let temp = head;

    if(temp){
        for(let i=0; i < index; i++){
            temp = temp.next;
        }
    }
    return temp.data;
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

const index = 1;

const output = IndexLinked(head,index);
console.log(output);