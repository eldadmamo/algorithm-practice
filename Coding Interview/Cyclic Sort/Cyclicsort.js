function CyclicSort(arr){
    let i=0; 
    while(i < arr.length){
        let index = arr[i] - 1;
        if(arr[index] != arr[i]){
            [arr[index],arr[i]] = [arr[i], arr[index]];
        } else {
            i++;
        }
    }
    return arr;
}

const arr = [5,4,3,2,1];
console.log(CyclicSort(arr));