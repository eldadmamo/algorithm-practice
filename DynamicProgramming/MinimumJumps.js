function minJump(arr) {
    const jump = new Array(arr.length);
    jump[0] = 0;

    for (let i = 1; i < arr.length; i++) {
        jump[i] = Infinity;
    }

    for(let i=1; i < arr.length; i++){
        for(let j=0; j < i; j++){
            if(arr[j]+ j >=i){
                if(jump[j] + 1 < jump[i]){
                    jump[i] = jump[j] + 1;
                }
            }
        }   
    }
    return jump[arr.length-1];
    
}
