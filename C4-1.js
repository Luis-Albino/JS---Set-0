///// Use of memoization /////

function fibonacci (nth) {
    let cache = fibonacci.prototype.cache;
    let fib;
    if (nth <= 1) {
        fib = cache[nth];
    }
    else {
        let a;
        if (cache[nth-1]) {
            a = cache[nth-1];
        }
        else {
            a = fibonacci(nth-1);
            cache.push(a);
        }
        let b = cache[nth-2];
        fib = a+b;
    }

    return fib
};

fibonacci.prototype.cache = [0,1];

console.log("fibonacci(4)=",fibonacci(4));
console.log("fibonacci(9)=",fibonacci(9));
