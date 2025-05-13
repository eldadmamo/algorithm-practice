// Union-Find with path compression
function find(arr, x) {
    if(arr[x] < 0){
        return x;

    }
    arr[x] = find (arr,arr[x]);
    return arr[x];
}

// Weighted union implementation
function weightedUnion(arr, u, v) {
    let rootU = find(arr, u);
    let rootV = find(arr, v);

    if(rootU === rootV) return;

    if(rootU < rootV){
        arr[rootU] += arr[rootV];
        arr[rootV] = rootU
    } else {
        arr[rootV] += arr[rootU];
        arr[rootU] = rootV;
    }
}

function isConnected(arr, u,v){
    let rootU = find(arr, u);
    let rootV = find(arr, v);

    if(rootU == rootV){
        return true;
    } 
    return false; 
    
}

// Initialize array (negative values = root nodes, magnitude = size)
const size = 5;
let arr = new Array(size).fill(-1);

console.log("Initial state:");
console.log("Index:", [0, 1, 2, 3, 4]);
console.log("Array:", arr, "\n");

// Union operations
weightedUnion(arr, 0, 1);
console.log("After union(0, 1):", arr);

weightedUnion(arr, 2, 3);
console.log("After union(2, 3):", arr);

weightedUnion(arr, 0, 2);
console.log("After union(0, 2):", arr);

weightedUnion(arr, 3, 4);
console.log("After union(3, 4):", arr);

// Find operations
console.log("\nFinal root checks:");
console.log("find(0):", find(arr, 0));
console.log("find(1):", find(arr, 1));
console.log("find(2):", find(arr, 2));
console.log("find(3):", find(arr, 3));
console.log("find(4):", find(arr, 4));  