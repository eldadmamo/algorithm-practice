function PriorityQueue(){
    [[arr[0],arr[size]]] = [[arr[size], arr[0]]];
    console.log(arr[size]);
    size = size - 1;
    DeletePriorityQueue(arr,0, size)
}

function DeletePriorityQueue(arr,index,size){
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let max = index;

    if(left <= size && arr[left] > arr[max]){
        max = left
    }

    if(right <= size && arr[right] > arr[max]){
        max = right
    }

    if(max != index){
        [arr[max], arr[index]] = [arr[index],arr[max]];
        DeletePriorityQueue(arr,max, size);
    }
}