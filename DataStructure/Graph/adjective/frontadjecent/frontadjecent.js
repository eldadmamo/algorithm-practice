const V = 5;

const arr = new Array(V).fill(null);

function addEdge(src, dest) {
    const newNode = { data: dest, next: null };
    newNode.next = arr[src];
    arr[src] = newNode;

    return arr;
}

console.log(addEdge(0,1));
console.log(addEdge(0,2));