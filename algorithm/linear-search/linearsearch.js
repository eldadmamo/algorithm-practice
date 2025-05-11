const linearsearch = (arr,key) => {
    for(let i=0; i < arr.length; i++){
        if(arr[i] == key){
            return 1
        }
    }
    return 0
}

const arr = [86,91,34,51,0];
const key = 50
const love = linearsearch(arr,key);
console.log(love)