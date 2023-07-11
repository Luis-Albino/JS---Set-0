function distance () {
    let j = arguments.length/2; // Auxiliar length
    let validInput = true; // Auxiliar boolean variable
    let dimension;
    let sum;
    let vector = [[],[]];

    if (j != 1) {

        for (let el of arguments) {
            validInput = validInput && (typeof el === "number")
        }

        if (j != 1 && j != 2 && j != 3 && j < 3 || !validInput || j > 3) return;

        for (let i=0; i<j; i++) {
            vector[0].push(arguments[i+j]);
            vector[1].push(arguments[i]);
        }

    }
    else {

        dimension = arguments.length;

        if (dimension != 2 && dimension != 3 || arguments[1].length != dimension) return;

        vector[0] = arguments[0];
        vector[1] = arguments[1];

    }

    try {
        for (let i=0; i<2; i++) {
            for (let el of vector[i]) {
                // Check for possible NaN
                if (el !== 0 && !el) throw null
            }
        }
    }
    catch (err) {
        return err
    }

    sum = 0;
    for (let i=0; i<j; i++) {
        let delta = vector[1][i] - vector[0][i];
        sum = sum + delta*delta;
    }

    return Math.sqrt(sum);
}


console.log("distance(1,2,2,2)=",distance(1,2,2,2)); // returns 1 (done as part of exercise 5)
console.log("distance([1,2],[2,2])=",distance([1,2],[2,2])); // returns 1
console.log(distance([1,2],[2,2,4])); // error: incompatible point data
