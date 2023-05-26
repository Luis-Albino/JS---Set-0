function addRec (array) {
    let sum = 0;
    for (let el of array) {
        sum += el
    }
    return sum
}

var arr = [ 1, 3, 5, 7];

console.log(arr," yields sumRec =",addRec(arr));
