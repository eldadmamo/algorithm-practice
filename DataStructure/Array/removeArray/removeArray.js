function removearray(arr){
    
    for(let i=index; i < arr.length - 1; i++){
        arr[i] = arr[i+1]
    }
    arr.length--
    return arr;
}

const arr = [1,20,5,78,30];
const index = 20;
const output = removearray(arr);
console.log(output)

