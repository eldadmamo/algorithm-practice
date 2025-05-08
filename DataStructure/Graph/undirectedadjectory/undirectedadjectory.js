function addEdge(src, dest) {
    // Add destination node to source's adjacency list
    let newNode = {data: dest, next:adjList[src]}

    adjList[src] = newNode;

    newNode = {data: src, next: adjList[dest]}
    
    adjList[src] = newNode;
}