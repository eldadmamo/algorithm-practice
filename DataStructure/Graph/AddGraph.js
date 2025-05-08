
let V= 5;

function init(){
    let arr = [];

    for(let i=0; i < V; i++){
        arr[i] = []
        for(let j=0; j < V; j++){
            arr[i][j] = 0
        }
    }
    return arr;
}

function addEdge(arr,src,dest){
    arr[src][dest] = 1  
}

function printAdjMatrix(arr){
    for(let i=0; i < V; i++){
        let value = '';
        for(let j=0; j < V; j++){
            value += arr[i][j] + " "
        }
        console.log(value);
    }

}

const adjMatrix = init();
addEdge(adjMatrix, 0, 1);
addEdge(adjMatrix, 0, 2);
addEdge(adjMatrix, 0, 3);
addEdge(adjMatrix, 1, 3);
addEdge(adjMatrix, 1, 4);
addEdge(adjMatrix, 2, 3);
addEdge(adjMatrix, 3, 4);

printAdjMatrix(adjMatrix);