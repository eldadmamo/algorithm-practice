
let front = null;
let rear = null;

function getNode(val){
    return {
        data: val,
        next: null,
        prev: null
    };
}


function insertRear(value){

    let newNode = getNode(value);

    if(rear === null){
        rear = front = newNode; 
    }else {
        rear.next = newNode;
        newNode.prev = rear;
        rear = newNode;
    }
    return newNode;

}

const love = insertRear(value);
console.log(love);