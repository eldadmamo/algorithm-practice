function leftRotate(root){
    const RightSubTree = root.right;
    const LeftSubTree = RightSubTree.left;

    RightSubTree.left = root;
    root.right = LeftSubTree;
    
    root.height = Math.max(getheight(root.left), getheight(root.right))+1;
    RightSubTree.height = Math.max(getheight(RightSubTree.left), getheight(RightSubTree.right)) + 1;
   
    return RightSubTree;
}

function RightRotate(root){
    const rightSubTree = root.left;
    const leftNodeSubTree = rightSubTree.right;

    rightSubTree.right = root;
    root.left = leftNodeSubTree;
    
    root.height = Math.max(getheight(root.left), getheight(root.right)) + 1;
    rightSubTree.height = Math.max(getHeight(rightSubTree.left), getHeight(rightSubTree.right)) + 1;
}


function rightleft(){
    root.right = rightRotate(root.right);
    return leftRotate(root);
}