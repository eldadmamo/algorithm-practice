function GoMoveToStart(head, length) {
    let ptr1 = head, ptr2 = head;

    while (length > 0) {
        ptr2 = ptr2.next;
        length--;
    }

    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
}

function calculateLength(slow) {
    let current = slow;
    let length = 0;

    do {
        current = current.next;
        length++;
    } while (current !== slow);

    return length;
}

function findCycleStart(head) {
    let fast = head, slow = head;
    let length = 0;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            length = calculateLength(slow);
            return GoMoveToStart(head, length);
        }
    }
    return null; // No cycle found
}