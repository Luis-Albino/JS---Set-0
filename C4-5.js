function distance () {
    let j = arguments.length/2; // Auxiliar length
    let validInput = true; // Auxiliar boolean variable

    for (let el of arguments) {
        validInput = validInput && (typeof el === "number")
        // Check for possible NaN
        if (el !== 0 && !el) return null
    }

    if (j != 2 && j != 3 && j < 3 || !validInput || j > 3) return;

    let sum = 0;
    for (let i=0; i<j; i++) {
        let delta = arguments[i] - arguments[i+j];
        sum = sum + delta*delta;
    }

    return Math.sqrt(sum);
}

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2); // delta = 1
var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…

console.log("delta1=",delta1);
console.log("delta2=",delta2);
console.log(distance(x1,x2));
