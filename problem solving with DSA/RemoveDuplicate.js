function RemoveDuplicate(arr){
    let length = 0;
    let result = [];
    for(let i=0; i < arr.length; i++){
            if(arr[i] != arr[i+1]){
                result[length++] = arr[i];
            }
    }
    return result;
}

let arr = [5,5,5];
console.log(RemoveDuplicate(arr));