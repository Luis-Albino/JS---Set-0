// ///// Convert number from base 16 to base 10 /////

function toBase10 (base16) {
    let base10 = parseInt(base16,16);
    try {
        if (!base10) throw "Invalid input: Hex format required"
    }
    catch (err) {
        console.log(err);
    }
    return base10
};

///// CONVERT TO RGB /////

function toRGB (hexNumber) {
    let rgb = [];
    /* Checks wether it is in hex format */
    try {
        if (hexNumber.search(/^\#[0123456789ABCDEF]{6}$/gi) === -1)
        throw "Invalid input: Hex format required"
    }
    catch (err) {
        console.log(err);
        return
    }
    /* Computes rgb */
    for (let i=0; i<3; i++) {
        let j = 2*i+1;
        rgb[i] = toBase10(hexNumber.slice(j,j+2));
    };
    
    return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";

};

console.log(toRGB("#3020ff"));

// function toBase10 (base16) { // base16 is supposed to be a string-number in base 16
//     let hexBase = "0123456789ABCDEF"; 
//     let number = 0;
//     let d = base16.length - 1;
//     for (let i=0; i<=d; i++) {
//         let digitBase16 = base16.charAt(i);
//         let numberBase10 = hexBase.indexOf(digitBase16.toUpperCase());
//         /* Check wether it is a hex digit number */
//         if (numberBase10 < 0) {
//             // console.log("Invalid input: Hex format required");
//             number = NaN;
//             i = d;
//         };
//         let exp = 1;
//         for (let j=1; j<=d-i; j++) {
//             exp = exp*16;
//         };
//         number += numberBase10*exp;
//     };
//     return number;
// }

// ///// CONVERT TO RGB /////

// function toRGB (hexNumber) {
//     let rgb = [];
//     let bool = true;
//     /* Checks wether it is in hex format */
//     if (hexNumber.search(/^\#.{6}$/) < 0) {
//         bool = false;
//     }
//     /* Computes rgb */
//     else {
//         for (let i=0; i<3; i++) {
//             let j = 2*i+1;
//             rgb[i] = toBase10(hexNumber.slice(j,j+2));
//             /* Checks valid hex digits */
//             if (!rgb[i]) {
//                 bool = false;
//                 i = 3;
//             };
//         };
//     };

//     if (bool) {
//         console.log("rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
//     }
//     else {
//         console.log("Invalid input: Hex format required");
//     };
// };


// toRGB("#3020ff");
