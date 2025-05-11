SIZE = 5;

const deleteProbing = (value) => {
    let key = value % SIZE;
    let index = key;

    while(arr[index] != value){
        index = (index+1) % SIZE;

        if(index == key){
            return 0;
        }
    }

    arr[index] = -1
}

const arr = [10,15,2,5,3];
const love = deleteProbing(3)
console.log(arr)