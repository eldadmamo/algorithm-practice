function fibonacci(n) {
    const fib = new Array(n+1);
   
    fib[0] = 0;
    fib[1] = 1;

    for(let i=2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
  }
  
const output = fibonacci(5);
console.log(output);