function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
        let value = arr[i];
        let index = i;

        while(index > 0 && arr[index-1] > value){
            arr[index] = arr[index-1];
            index--;
        }
        arr[index] = value;
    }
    return arr; 
}

const arr =  [40,10,50,30,20];
const love = insertionSort(arr);
console.log(love)