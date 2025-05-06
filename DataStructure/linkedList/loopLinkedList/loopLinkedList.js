function loopLinkedList(head) {
    
    let slow = head;
    let fast = head;

    
    while (slow != null && fast !== null && fast.next !== null) {
        slow = slow.next;         
        fast = fast.next.next;     

       
        if (slow === fast) {
            return 1; 
        }
    }

    
    return 0; 
}


const node2 = { data: 2, next: null };
const node5 = { data: 5, next: null };
const node7 = { data: 7, next: null };
const node0 = { data: 0, next: null };

// Link nodes: 1 -> 2 -> 5 -> 7 -> 0 -> 2 (cycle)
const head = { data: 1, next: node2 };
node2.next = node5;
node5.next = node7;
node7.next = node0;
node0.next = node2; 

console.log(loopLinkedList(head)); 