function missingNumber(arr){
    let i =0; 
    while(i < arr.length){
        if(arr[i] < arr.length && arr[i] != arr[arr[i]]){
            [arr[i],arr[arr[i]]] = [arr[arr[i]], arr[i]]
        } else {
            i++;
        }
    }
    for(let i=0; i < arr.length; i++){
        if(arr[i] != i){
            return i;
        }
    }
    return arr.length;
}

const arr = [3,5,1,4,0];
console.log(missingNumber(arr));