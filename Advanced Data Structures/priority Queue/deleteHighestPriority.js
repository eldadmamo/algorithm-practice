function deleteHighestPriority(arr){
    if(arr.length == 0){
        console.log("Priority Queue is Empty") 
    }
    else {
        [arr[0],arr[arr.length -1]] = [arr[arr.length - 1],arr[0]];
        arr.pop();
        buildHeap(arr, arr.length - 1);
    }
}

function buildHeap(heap, size){
    for(let i= Math.floor(size - 1) / 2; i>=0; i--){
        heapify(heap, i, size);
    }
}

function heapify(arr, index, size){
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let max = index;

    if(left <=max && arr[left] > arr[max]){
        max = left;
    }

    if(right <= max && arr[right] > arr[max]){
        max = right;
    }

    if(max != index){
        [arr[max],arr[index]] = [arr[index], arr[max]];
        heapify(arr, max, size);
    }
}

