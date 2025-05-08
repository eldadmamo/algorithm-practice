function searchadjecent(src,dest){
    let temp = arr[src];

    while(temp){
        if(temp.data == dest){
            return 1;
        }
        temp = temp.next;
    }
    return 0;
}

