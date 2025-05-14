function main(n) {
    const arr = new Array(n + 1).fill(-1);
    const result = Fibonacci(arr, n);
    return result;
}

function Fibonacci(result, n) {
   
    if(result[n] === -1) {
        if (n <= 1) {
            result[n] = n;
        } else {
            result[n] = Fibonacci(result, n - 1) + Fibonacci(result, n - 2);
        }
    }
    return result[n];
}

const love = main(4);
console.log(love); 
