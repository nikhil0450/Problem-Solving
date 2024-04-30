// Write a function to find the nth Fibonacci number using iteration.

function findNthFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(findNthFibonacci(10))