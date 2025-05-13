function LevelOrderSuccessor(root, key){

    if(root == null) return;

    const queue = [root]


    while(queue.length > 0){
        const node = queue.shift();

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right);
        }
        if(node.data === key){
            break;
        }
    }
    return queue.length > 0 ? queue[0].data:-1;
}

