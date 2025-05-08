const SIZE = 3;
const arr = new Array(SIZE).fill(-1);

let front = 0;
let rear = 0;

function enqueue(val){
    if(rear == SIZE){
        console.log("print is queued")
    } else {
        arr[rear] = val;
        rear++;
    }
    return arr;
}



enqueue(1);
enqueue(2);
