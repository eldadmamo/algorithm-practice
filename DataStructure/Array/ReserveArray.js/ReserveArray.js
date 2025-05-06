function ReserveArray(str){
    let arr = str.split('');
    let wstart = 0;
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] === ' '){
            let start = wstart;
            let end = i - 1;
            while(start < end){
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--
            }
            wstart = i+1
        }
    }

    let start = wstart;
    let end = arr.length - 1;
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }

    return arr.join('')
}

const str = "programming is an art";
const love = ReserveArray(str);
console.log(love);

