function SlidingWindow(arr, k){
    const combinearr = [];
    for(let i=0; i <= arr.length - k; i++){
        let sumarr = 0;
        for(let j=i; j < i+k; j++){
            sumarr += arr[j];
        }
        combinearr.push(sumarr);
    }
    return combinearr;
}


const arr = [1,5,-1,6,3,2];
const k = 3;
const output = SlidingWindow(arr,k);
console.log(output)