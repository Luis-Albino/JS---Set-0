function addRec (array,fromIndex = 0) {
    let sum = array[fromIndex];
    let newIndex = fromIndex+1;
    if (newIndex < array.length) {
        sum += addRec(array,newIndex)
    }
    return sum
};

var arr = [ 1, 3, 5, 7];

console.log(arr," yields sumRec =",addRec(arr));

// function addRec (array) {
//     let sum = 0;
//     for (let el of array) {
//         sum += el
//     }
//     return sum
// };
