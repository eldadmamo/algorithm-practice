SIZE = 5;

const searchprobing = (value) => {
    let key = value % arr.length;
    let index = key;

    while(arr[index] != value){
        index = (index + 1) % arr.length;

        if(index == key){
            console.log(`no value is found with ${value}`)
        }
    }
    return arr[index];
}

const arr = [10,34,12,32,9]
const value = 9;
const love = searchprobing(value);
console.log(love);