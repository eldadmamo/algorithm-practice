let head = null;

function AddDoubleLinked(val){
    const temp = {data: val, prev: null, next: null};

    if(head == null){
        head = temp;
    }
     else {
        temp.next = head;
        head.prev = temp;
        head = temp;
    }
    return temp
}

const val = 10;


console.log(AddDoubleLinked(val));