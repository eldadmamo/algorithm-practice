function pairSum(arr, target){
    let wstart = 0;
    let wend = arr.length -1;

    while(wstart != wend){
        if(arr[wstart]+ arr[wend] == target){
            return 1;
        }
        wstart++;
    }
    return 0;
}

const arr = [1,5,10,30,80];
const target = 90;

console.log(pairSum(arr,target))

