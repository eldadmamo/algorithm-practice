function printLevelOrder(root) {
    if (root === null) return;
  
    const queue = [root];
    const result = [];

    while(queue.length > 0){
        const node = queue.shift();
        result.push(node.data);

        if(node.left !== null){
            queue.push(node.left)
        }
        if(node.right !== null){
            queue.push(node.right);
        }
    }
    console.log(result.join(' '));
}