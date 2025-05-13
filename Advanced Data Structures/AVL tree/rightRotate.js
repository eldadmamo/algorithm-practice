function rightRotate(root) {
    const leftSubtree = root.left;
    const rightNodeOfLeftSubtree = leftSubtree.right;
  
    // Perform rotation
    leftSubtree.right = root;
    root.left = rightNodeOfLeftSubtree;
  
    // Update heights
    root.height =
      Math.max(
        root.left ? root.left.height : 0,
        root.right ? root.right.height : 0
      ) + 1;
    leftSubtree.height =
      Math.max(
        leftSubtree.left ? leftSubtree.left.height : 0,
        leftSubtree.right ? leftSubtree.right.height : 0
      ) + 1;
  
    // Return new root
    return leftSubtree;
  }