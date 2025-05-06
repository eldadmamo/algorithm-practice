function removearray(){
    for(let i=index; i < arr.length - 1; i++){
        arr[i] = arr[i+1]
    }
    arr.length--
    return arr;
}

const arr = [1,20,5,78,30];
const index = 2;
const output = removearray();
console.log(output)

