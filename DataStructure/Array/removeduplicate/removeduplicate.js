function removeduplicate(arr) {
    if(arr.length == 0 || arr.length == 1) 
        return arr.length;
   
    let len = 0;

    for(i = 0; i < arr.length -1 ; i++){
        if(arr[i] != arr[i+1]){
            arr[len++] = arr[i]
        }
    }
    arr[len++] = arr[arr.length-1];
    arr.length = len;
    return arr;
}
const arr =[1,1,1,3,3,5,5];

const output = removeduplicate(arr);
console.log(output)