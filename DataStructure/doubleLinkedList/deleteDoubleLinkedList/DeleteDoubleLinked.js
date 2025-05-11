function DeleteDoubleLinked(val,key) {
    let current = val;

    // Search for the node
    while (current !== null && current.data !== key) {
        current = current.next;
    }

    // Key not found
    if (current === null) {
        console.log("Key Not Found");
        return;
    }

    // Case 1: Node is head
    if (current === val) {
        val = val.next;
        if (val !== null) {
            val.prev = null;
        }
    }
    // Case 2: Node is tail
    else if (current.next === null) {
        current.prev.next = null;
    }
    // Case 3: Node is in the middle
    else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }
    return head;
}


const love = DeleteDoubleLinked(val);
console.log(love)