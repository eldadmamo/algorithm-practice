function hasPath(root, sum) {
   if(root == null){
    return sum == 0 
   } else {
    const remaining = sum - root.data;
    const leaf = root.left === null && root.right === null;

    if(leaf){
        return remaining == 0;
    }

    return hasPath(root.left, remaining ) || hasPath(root.right, remaining)
   }
}
