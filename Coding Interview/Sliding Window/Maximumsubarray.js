function subarraySum(arr,S){
    let wstart = 0;
    let len = Infinity;
    let subsum = 0;
    let result = [];

    for(let i=0; i < arr.length; i++){
        subsum += arr[i];

        while(subsum>= S){
            const currentWindowSize = i - wstart +1;
            if(currentWindowSize < len){
                len = currentWindowSize;
            }
            subsum -= arr[wstart];
            wstart++
        }
    }
    return len;
}

const arr = [4,1,5,2,4,1];
const S = 7;

console.log(subarraySum(arr,S))
