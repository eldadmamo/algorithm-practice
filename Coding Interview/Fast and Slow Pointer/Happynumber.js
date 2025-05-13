function isdigit(num){
    let sum = 0;

    while(num > 0){
        let mod = num % 10;
        sum += mod * mod;
        num = Math.floow(num / 10);
    }
    return sum;
}

function happynumber(head){
    let fast = head;
    let slow = head;

    do{
        slow = isdigit(slow);
        fast = isdigit(isdigit(fast));
    }while(fast !== slow);

    return slow === 1;
}