let head = null;

function addFirstStack(val){
    let temp = {data: val, next:null};

    if(head == null){
        head = temp;
    } else {
        temp.next = head;
        head = temp;
    }
    
    return temp;
}

const val = 2;


const output = addFirstStack(val);
console.log(output);