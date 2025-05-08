const SIZE = 3;
const arr = new Array(SIZE).fill(-1);

function addStack(value){
    for(let i=0; i < value; i++){
        if(arr[i] == -1){
            arr[i] = value;
            return;
        }
    }
    console.log("can not add", value);
}

addStack(1);
addStack(3);
addStack(5);
addStack(7);
addStack(10)

console.log(arr); // Output: [1, 3, 5]