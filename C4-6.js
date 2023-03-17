function distance () {

    let bool; // Auxiliar boolean variable
    let vec = []; // vector object
    let j; // Auxiliar for vector-array dimension

    function vector (arg) {
        let vecArray = [0,0,0]; // default vector value
        for (let i=0; i < arg.length; i++) {
            vecArray[i] = arg[i];
        }
        return vecArray;
    };

    function booleanComparation (arg) {
        for (let i=1; i < arg.length; i++) {
            bool = (bool && (typeof arg[i-1] === typeof arg[i]));
        }
    };

    function arrayComparation (arg) {
        j = arg[0].length;
        bool = (arg.length === 2 && arg[1].length === arg[0].length && (j === 2 || j === 3)) ? true : false;
        booleanComparation(arg);
    }

    if (typeof arguments[0] === "number") {
        j = arguments.length/2;
        bool = (j === 2 || j === 3) ? true : false;
        if (bool === false && j < 3) {
            return "Insufficient parameters"
        };
        booleanComparation(arguments);
        if (bool) {
            let vec0 = []; // Auxiliar for vector
            let vec1 = []; // Auxiliar for vector
            for (let i=0; i < j; i++) {
                vec0[i] = arguments[i];
                vec1[i] = arguments[i+j];
            };
            vec[0] = vector(vec0);
            vec[1] = vector(vec1);
        }
    }

    else if (typeof arguments[0] === "object") {
        arrayComparation(arguments);

        if (bool) {
            let bool2 = true;
            for (let el in arguments) {
                bool2 = bool && bool2;
                vec[el] = vector(arguments[el]);
            }
            bool = bool2;
        }
    }

    if (!!bool == false) {
        return "incompatible point data"
    }

    let sum = 0;
    for (let i=0; i<j; i++) {
        let delta = vec[1][i] - vec[0][i];
        sum = sum + delta*delta;
    }

    return Math.sqrt(sum);
}

console.log("distance(1,2,2,2)=",distance(1,2,2,2)); // returns 1 (done as part of exercise 5)
console.log("distance([1,2],[2,2])=",distance([1,2],[2,2])); // returns 1
console.log("distance([1,2],[2,2,4])=",distance([1,2],[2,2,4])); // error: incompatible point data