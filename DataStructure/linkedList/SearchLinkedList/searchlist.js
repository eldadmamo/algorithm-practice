function Searchlist(val,key){

    let temp = val;

    while(temp){
        if(temp.data == key){
            return 1;
        }
      temp = temp.next;
    }
    return 0;
}


const val = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 5,
            next: {
                data: 7,
                next: {
                    data: 0,
                    next: null
                }
            }
        }
    }
};
const key = 1

const output = Searchlist(val,key);
console.log(output)