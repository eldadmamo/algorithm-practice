class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

function getNewNode(val) {
    return {
        key: val,
        left: null,
        right: null
    };
}

