function RemoveTwoDuplicate(arr){
let length=0;
let result = [];

result[length++] = arr[0];

for(let i= 1; i < arr.length; i++){
    if(arr[i-1] !== arr[i+1]){
        result[length++] = arr[i];
    }
}
return result.length;

}

const arr = [5,5,5,6,6,6,8];
console.log(RemoveTwoDuplicate(arr))
