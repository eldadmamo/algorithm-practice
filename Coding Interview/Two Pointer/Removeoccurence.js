function RemoveOccurence(arr,val){
   let wstart = 0;
   let wend = arr.length -1;
   let result = [];

   while(wstart <= wend){
    if(arr[wstart] != val){
        result.push(arr[wstart])
    } 
    wstart++;
   }
   return result ? result: 0; 
}

// const arr = [10,30,40,10,12];
// const val = 10;

// console.log(RemoveOccurence(arr,val));


function RemoveOccurencevalue(arr,val){
    let newval = 0;
    let result = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i] != val){
            result[newval++] = arr[i];
        }
    }
    return result;
}

const arr = [10,30,40,10,12];
const val = 10;

console.log(RemoveOccurencevalue(arr,val));