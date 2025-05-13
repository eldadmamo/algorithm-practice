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
                result = [];
                for(let j= wstart; j <=i; j++){
                    result.push(arr[j])
                }
            }
            subsum -= arr[wstart];
            wstart++
        }
    }
    return result;
}

const arr = [4,1,5,2,4,1];
const S = 7;

console.log(subarraySum(arr,S))
