///// Use of memoization /////

function fibonacci (nth) {
    let fib;
    if (nth <= 1) {
        fib = fibonacci.prototype[nth];
    }
    else {
        let a;
        if (fibonacci.prototype[nth-1]) {
            a = fibonacci.prototype[nth-1];
        }
        else {
            a = fibonacci(nth-1);
            fibonacci.prototype[nth-1] = a;
        }
        let b = fibonacci.prototype[nth-2];
        fib = a+b;
    }

    return fib
};

fibonacci.prototype[0] = 0;
fibonacci.prototype[1] = 1;

console.log("fibonacci(4)=",fibonacci(4));
console.log("fibonacci(9)=",fibonacci(9));
