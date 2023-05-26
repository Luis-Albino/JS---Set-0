function distance () {
    let j = arguments.length/2; // Auxiliar length
    let validInput = true; // Auxiliar boolean variable
    let dimension;
    let sum;

    if (j != 1) {
        for (let el of arguments) {
            validInput = validInput && (typeof el === "number")
        };

        try {
            if (j != 1 && j != 2 && j != 3 && j < 3)
            throw "Insufficient parameters";
            if (!validInput || j > 3)
            throw "incompatible point data";
        }
        catch (err) {
            console.log(err)
            return
        };

        sum = 0;
        for (let i=0; i<j; i++) {
            let delta = arguments[i] - arguments[i+j];
            sum = sum + delta*delta;
        }
    }
    else {
        dimension = arguments.length;
        try {
            if (dimension != 2 && dimension != 3 || arguments[1].length != dimension)
            throw "incompatible point data";
        }
        catch (err) {
            console.log(err)
            return
        };
        sum = 0;
        for (let i=0; i<dimension; i++) {
            let delta = arguments[1][i] - arguments[0][i];
            sum = sum + delta*delta;
        }

    }

    return Math.sqrt(sum);
}


console.log("distance(1,2,2,2)=",distance(1,2,2,2)); // returns 1 (done as part of exercise 5)
console.log("distance([1,2],[2,2])=",distance([1,2],[2,2])); // returns 1
distance([1,2],[2,2,4]); // error: incompatible point data
