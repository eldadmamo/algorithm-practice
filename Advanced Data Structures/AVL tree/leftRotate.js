function leftRotate(root) {
    const rightSubtree = root.right;
    const leftNodeOfRightSubtree = rightSubtree.left;

    // Perform rotation
    rightSubtree.left = root;
    root.right = leftNodeOfRightSubtree;

    // Update heights
    root.height = Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    rightSubtree.height = Math.max(getHeight(rightSubtree.left), getHeight(rightSubtree.right)) + 1;

    return rightSubtree;
}

// Helper function to get node height
function getHeight(node) {
    return node ? node.height : 0;
}