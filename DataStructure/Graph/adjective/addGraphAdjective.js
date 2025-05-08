const V = 5;
const arr = new Array(V).fill(null);


function addEdge(src,dest){
    let newNode = {data: dest, next:null};

    if(arr[src] == null){
        arr[src] = newNode;
    }else {
        let last = arr[src];
        
        while(last.next != null){
            last = last.next;
        }
        last.next = newNode;
    }
    return arr;
}

console.log(addEdge(0,1));
console.log(addEdge(0,2))
console.log(addEdge(1,2))