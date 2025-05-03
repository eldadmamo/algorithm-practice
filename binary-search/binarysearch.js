function binarySearch(arr,key){
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        let mid = Math.floor((start + end) /2)

        if(arr[mid] === key){
            return 1
        }
        
        if(arr[mid] < key){
            start = mid + 1
        } else {
            end = mid - 1
        }

        
    }
    return 0
}

const arr = [10, 25, 45, 70, 90, 100, 110, 123];
const key = 45;
const result = binarySearch(arr, key);
console.log(result)