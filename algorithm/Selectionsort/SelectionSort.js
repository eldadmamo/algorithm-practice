function selectionsort(arr) {
    for(let i=0; i < arr.length -1; i++){
        for(let j= i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr;
  }
  
  // Example usage:
  const arr = [5, 2, 9, 1, 5, 6];
  console.log(selectionsort(arr));