function subarraySum(arr, k) {
    let wstart = 0;
    let subSum = 0;
    let results = []

    for(let i=0; i < arr.length;i++){
        subSum +=arr[i];

        if(i>=k-1){
            console.log(subSum);
            subSum -= arr[wstart];
            wstart++;
        }
    }
    return results
}

const arr = [1,5,-1,6,3,2];
const k = 3;

console.log(subarraySum(arr,k))