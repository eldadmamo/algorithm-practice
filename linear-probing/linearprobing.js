const SIZE = 5;
const arr = new Array(SIZE).fill(-1);

function init() {
  for(let i=0; i < SIZE; i++){
    arr[i] = -1
  }
}

function insert(value) {
    let key = value % SIZE;
    let index  = key;

    while(arr[index] != -1){
        index = (index +1) % SIZE;
        if(index == key){
            console.log("the HASH IS FULL")
        }
    }

    arr[index] = value;
    return true;
}

init();
insert(10); 
insert(4); 
insert(2); 
insert(15); 
insert(5);     
console.log(arr); 
