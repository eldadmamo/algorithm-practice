
function search(value,arr){
        let size = arr.length;
        let key = value % size;
        let temp = arr[key];
        while(temp){
            if(temp.data === value){
                return 1
            }
            temp = temp.next 
        }
        return 0;
    }



const arr = [
    { data: 7, next: { data: 0, next: null } },
    null,
    null,
    { data: 3, next: { data: 10, next: null } },
    { data: 4, next: null },
    { data: 5, next: null },
    null
];

const value = 10;

const love = search(value,arr);
console.log(love)