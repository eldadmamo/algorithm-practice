let head = null;

function addCircular(val){
    let temp = {data: val, next: null};

    if(head == null){
        temp.next = temp;
        head = temp;
    }
    else {
        let current = head;

        while(current.next != head){
            current = current.next; 
        }
        current.next = temp;
        temp.next = head;
        head = temp;
    }
    return temp.data;
}


const val = 10

const output = addCircular(val);
console.log(output);