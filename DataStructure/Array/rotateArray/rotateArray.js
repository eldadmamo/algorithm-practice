function rotateArray(arr,k){
    k = k % arr.length;
    if(k == 0) return;

    for(let rotation =0; rotation < k; rotation++){
        let temp = arr[arr.length -1];
        for(let i= arr.length -1; i> 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = temp 
    }
    return arr;
}

const arr = [1,2,3,4,5];
const k = 2;
const output = rotateArray(arr,k);

console.log(output)