let head = null;

function AddLast(val){
    let newNode = {data: val, next: null};
    newNode.data = val;
    newNode.next = null;

    if(head == null){
        newNode = head;
    } 
    else {
        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    return newNode;
}


const val = [
    1,2,3
];

const output =  AddLast(val);
console.log(output);




