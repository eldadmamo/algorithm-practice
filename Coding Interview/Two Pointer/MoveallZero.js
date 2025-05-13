function MoveallZero(arr){
    let length = 0;

    for(let i=0; i < arr.length; i++){
        if(arr[i] == 1){
            arr[length++] = arr[i];
        }
    }
    while(length < arr.length){
        arr[length++] = 0
    }
    return arr;
}

const arr = [1,0,1,0,1,0];
console.log(MoveallZero(arr));
