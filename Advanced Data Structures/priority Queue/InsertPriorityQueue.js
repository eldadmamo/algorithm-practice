function insert(heap,val){
    heap.push(val);
    let index = heap.length -1;

    while(index > 0){
        let partentIdx = Math.floor((index -1) /2);
        if(heap[index] > heap[partentIdx]){
            [heap[index],heap[partentIdx]] = [heap[partentIdx], heap[index]];
            index = partentIdx;
        } else {
            break;
        }
    }
}


const heap = [];

insert(heap, 5);
console.log("After inserting 5:", [...heap]); // [5]

insert(heap, 10);
console.log("After inserting 10:", [...heap]); // [10, 5]

insert(heap, 3);
console.log("After inserting 3:", [...heap]); // [10, 5, 3]

insert(heap, 8);
console.log("After inserting 8:", [...heap]); // [10, 8, 3, 5]

insert(heap, 15);
console.log("After inserting 15:", [...heap]);

