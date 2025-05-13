function removeDuplicate(arr){
   let length = 0;
   let result = [];
   result[length++] = arr[0];
   for(let i=1; i < arr.length; i++){
    if(arr[i] !== arr[i-1]){
        result[length++] = arr[i];
    }
   }
   return result.length;
}

const arr = [1,1,1,3,3,5,5];
console.log(removeDuplicate(arr));


