function deleteValue(value, arr) {
    const key = value % arr.length;
    let temp = arr[key];
    let prev = null;

    while(temp){
        if(temp.data == value){
            if(prev == null){
                arr[key] = temp.next 
            } else {
                prev.next = temp.next;
            }
            return 1
        }
        prev = temp;
        temp = temp.next;
    }
    return 0;
  }
  
  // Example usage with the provided data
  const arr = [
    { data: 7, next: { data: 0, next: null } },
    null,
    null,
    { data: 3, next: { data: 10, next: null } },
    { data: 4, next: null },
    { data: 5, next: null },
    null
  ];
  
  const value = 0;
  console.log(deleteValue(value, arr));  // Returns 1 (success)
  console.log(arr);
 