
function value(arr, size){
    for(let i = Math.floor(arr.length)/2; i>=0; i--){
        PriorityQueue(arr, i, size);
    }
}


function PriorityQueue(arr, index, size){
    let left = 2*index + 1;
    let right = 2*index + 2;

    let max = index;

    if(left <= size && arr[left] > arr[max]){
        max = left;
    }

    if(right <= size && arr[right] > arr[max]){
        max = right;
    }

    if(max != index){
        [[arr[index], arr[max]]] = [[arr[max], arr[index]]];
        PriorityQueue(arr, max, size)
    }
}