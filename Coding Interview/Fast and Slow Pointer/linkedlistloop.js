function linkedlistloop(head){
    let fast = head;
    let slow = head;

    if(head){
        while(slow != null && fast != null && fast.next != null ){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            return 1;
        }
     }
     return -1;
  }
}

