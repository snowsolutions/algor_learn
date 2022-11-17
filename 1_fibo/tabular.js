
const fib = (n) => {
    //create empty table fill with 0
    const table = Array(n + 1).fill(0)
    //base case
    table[0] = 0;
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}


console.time();
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(45));
console.timeEnd()