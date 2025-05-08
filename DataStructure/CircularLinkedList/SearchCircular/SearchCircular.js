

function search(key, val) {
    if (val === null) {
      return -1;
    }
  
    let temp = val;
  
    do {
      if (temp.data === key) {
        return 1;
      }
      temp = temp.next;
    } while (temp !== val);
  
    return -1;
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
const key = 5

const output = SearchCircular(val,key);
console.log(output);