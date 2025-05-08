function buildHeap(arr, size) {
    for(let i = Math.floor(size)/2 ; i>= 0; i--){
        heapify(arr, i, size);
    }
  }
  
  function heapify(arr, index, size) {
    let left = 2 * index +1;
    let right = 2 * index +2;

    let max = index; 

    if(left <= index && arr[left] > arr[max]){
        max =  left;
    }

    if(right <= index && arr[right] > arr[max]){
        max = right
    };

    if(max != index){
        [arr[index],arr[max]] = [arr[max],arr[index]];
        heapify(arr, max, size);
    }
  }