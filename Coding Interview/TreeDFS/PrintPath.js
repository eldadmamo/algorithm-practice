function printPaths(root) {
    const paths = [];
    printPathsRecur(root, paths, 0);
}   

function printPathsRecur(node, paths, pathLength) {
    if(node == null){
        return 
    }

    paths[pathLength] = node.data;
    pathLength++;

    if(node.left == null && node.right == null){
        const currentpath = paths.slice(0, pathLength);
        console.log(currentpath.join(' '))
    } else {
        printPathsRecur(node.left, paths,pathLength)
        printPathsRecur(node.right, paths, pathLength)
    }
  }
  
