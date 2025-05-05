function bubbleSort(arr){
    for(let i=0; i < arr.length-1; i++){
        for(let j=0; j < arr.length -1 -i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

  // Example usage:
  const arr = [5, 2, 9, 1, 5, 6];
  console.log(bubbleSort(arr));