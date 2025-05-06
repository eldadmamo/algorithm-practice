
function insertArray(){
    let i;
    for(i = arr.length; i > pos; i--){
        arr[i] = arr[i-1];
    }
    arr[i] = position;
    return arr;
}

const arr = [1,20,5,78,30];
const pos = 2;
const position = 100;
const answer = insertArray();
console.log(answer);