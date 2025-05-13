class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function minDepth(root) {
    if(root === null) return;

    let queue = [{node: root, depth:1}];

    while(queue.length > 0){
        const {node, depth} = queue.shift();

        if(node.left == null && node.right == null){
            return depth;
        }

        if(node.left != null){
            queue.push({node: node.left, depth: depth+1})
        }

        if(node.right != null){
            queue.push({node: node.right, depth: depth+1})
        }
    }
    return 0;
}

