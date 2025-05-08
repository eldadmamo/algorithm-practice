function removeAdjacent(src, dest) {
    if (!arr[src]) return; // Handle empty list

    // Remove all leading nodes with data === dest
    while (arr[src] && arr[src].data === dest) {
        arr[src] = arr[src].next;
    }

    let temp = arr[src];
    while (temp && temp.next) {
        if (temp.next.data === dest) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
}