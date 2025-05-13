function fastandslow(head){
    let slow = head;
    let fast = head;

  if(head){
   while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
  }

  return -1;

}