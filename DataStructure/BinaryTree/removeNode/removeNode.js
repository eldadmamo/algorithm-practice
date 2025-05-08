function removeNode(root, val) {
    if(root == null){
        return; 
    }
    if(root.key < val){
        root.right = removeNode(root.right, val)
    } else if(root.key > val){
        root.left = removeNode(root.left, val) 
    } 
    else {
        if(root.left == null && root.right == null){
            return null;
        } else if(root.left == null){
            return root.right;
        }else if(root.right == null){
            return root.left;
        } else {
            let temp = root.right;
            while(temp.left !== null){
                temp = temp.left;
            }
            root.key = temp.key;
            root.right = removeNode(root.right, temp.key);
        }
        
    }
    return root;
  }

const output = removeNode();
console.log(output);

