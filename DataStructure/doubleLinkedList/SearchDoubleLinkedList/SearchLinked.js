function searchLinked(val,key){
    let temp = val;

    while(temp){
    if(temp.data == key){
       return temp.data; 
    }
    temp = temp.next
    }
    return -1;
}


const head = {
    data: 1,
    prev: null,
    next: null
};

const node2 = {
    data: 2,
    prev: head,
    next: null
};
head.next = node2;

const node5 = {
    data: 5,
    prev: node2,
    next: null
};
node2.next = node5;

const node7 = {
    data: 7,
    prev: node5,
    next: null
};
node5.next = node7;

const node0 = {
    data: 0,
    prev: node7,
    next: null
};
node7.next = node0;

key = 6

// Resulting structure

const love = searchLinked(head,key);
console.log(love);