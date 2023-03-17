function add () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum
}

var answer = add(1,2) + add(1,4,6,7,2);

console.log(answer)