function getlength(head){
    let temp = head;
    let count = 0;
    while(temp){
        count++;
        temp = temp.next;
    }
    return count;
}

function LastNode(head,value){
    let temp = head;
    let num = getlength(head);

    for(let i=0; i < num - value; i++){
        temp = temp.next;
    }
    return temp.data;
}


const head = {
    data: 10,
    next: {
        data: 20,
        next: {
            data: 30,
            next: null
        }
    }
};

let value =1;

const length = getlength(head);
const output = LastNode(head,value);
console.log(length,output)