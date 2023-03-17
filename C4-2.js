function addRec (array) {
    let s0 = array.pop(); // Gives the lastclear element of array and removes it from the array
    let sum = s0;
    if (array.length > 0) {
        sum = sum + addRec(array);
    }
    array.push(s0); // adds back the last element of the array
    return sum
}

var arr = [ 1, 3, 5, 7];

console.log(arr," yields sumRec =",addRec(arr));