class HashTable{
    constructor(){
        this.size = 7;
        this.chain = new Array(this.size).fill(null)
    }

    insert(value){
        const key = value % this.size;
        const newNode = {data: value,next: null};

        if(this.chain[key] === null){
            this.chain[key] = newNode
        }
        else {
            let temp = this.chain[key]
            while(temp.next !== null){
                temp = temp.next
            }
            temp.next = newNode;
        }
    }

}

const ht = new HashTable();

// Insert values
ht.insert(7);
ht.insert(0);
ht.insert(3);
ht.insert(10);
ht.insert(4);
ht.insert(5)

console.log(ht.chain);