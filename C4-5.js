function distance () {

    let bool; // Auxiliar boolean variable
    let vec0 = []; // Auxiliar for vector
    let vec1 = []; // Auxiliar for vector
    let j; // Auxiliar for vector-array dimension

    if (typeof arguments[0] === "number") {
        j = arguments.length/2;
        bool = (j === 2 || j === 3) ? true : false;
        if (bool === false && j < 3) {
            return "Insufficient parameters"
        };
        for (let i=1; i < arguments.length; i++) {
            bool = (bool && (typeof arguments[i-1] === typeof arguments[i]));
        };
        if (bool) {
            for (let i=0; i < j; i++) {
                vec0[i] = arguments[i];
                vec1[i] = arguments[i+j];
            };
        }
    }

    if (!!bool == false) {
        return "incompatible point data"
    }

    let sum = 0;
    for (let i=0; i<j; i++) {
        // let delta = vec[1][i] - vec[0][i];
        let delta = vec1[i] - vec0[i];
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
console.log("distance(x1,x2)=",distance(x1,x2));