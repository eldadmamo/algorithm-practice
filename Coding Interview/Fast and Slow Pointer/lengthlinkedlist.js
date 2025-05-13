function calculateLength(slow){
    let current = slow;

    let length = 0;

    do{
        current = current.next;
        length++;
    }while(current != slow)
    return length;
}


function lengthLinkedList(){
    let fast = head;
    let slow = head;

    if(head){
        while(slow != null && fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            return calcualteLength(slow)
        }
    }
  }
  return -1;
}

