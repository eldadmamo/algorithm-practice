
function getLength(head){
    let temp = head;
    let count = 0;

    while(temp){
        count++;
        temp = temp.next;
    }
    return count;
}



function MiddleLink(head){
    let temp = head;

    if(temp){
        let length = getLength(temp);
        
        for(let i=0; i < Math.floor(length/2); i++){
            temp = temp.next;
        }
        
    }
    return temp.data
}

const head = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 5,
            next: {
                data: 7,
                next: {
                    data: 0,
                    next: null
                }
            }
        }
    }
};

const length = getLength(head)
const output = MiddleLink(head);
console.log(length,output);