function DuplicateSort(arr){
    const i = 0;
    while(i < arr.length){
        if(arr[i] != i+ 1){
        let index = arr[i] -1;
        if(arr[index] != arr[i]){
            [arr[index],arr[i]] = [arr[i],arr[index]]
        } else {
            return arr[index]
        }
       } else {
        i++;
       }
    }
}