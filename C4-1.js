///// Use of memoization /////

function fibonacci (nth) {
    fibonacci.prototype[0] = 0;
    fibonacci.prototype[1] = 1;
    let fib;
    if (nth <= 1) {
        fib = fibonacci.prototype[nth];
    }
    else {
        let A;
        if (fibonacci.prototype[nth-1]) {
            A = fibonacci.prototype[nth-1];
        }
        else {
            A = fibonacci(nth-1);
            fibonacci.prototype[nth-1] = A;
        }
        let B = fibonacci.prototype[nth-2];
        fib = A+B;
    }

    return fib
}

console.log("fibonacci(4)=",fibonacci(4));
console.log("fibonacci(9)=",fibonacci(9));


//////////////////////////////////////////
//////////////* ALTERNATIVE */////////////
//////////////////////////////////////////

function fibonacci2 (nth) {
    fibonacci2.prototype[0] = 0;
    fibonacci2.prototype[1] = 1;
    let fib;
    if (nth <= 1) {
        fib = fibonacci2.prototype[nth];
    }
    else {
        fib = fibonacci2(nth-1) + fibonacci2(nth-2);
    }
    return fib
}

console.log("fibonacci2(4)=",fibonacci2(4));
console.log("fibonacci2(9)=",fibonacci2(9));