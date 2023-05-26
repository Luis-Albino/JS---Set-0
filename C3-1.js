function mul(a,b) {
    return (a*b).toString(13)
};

console.log(mul(9,6))

// function numberBase13(numb) {
//     let newNumber = "";
//     let base = 13;
//     let power = 0;
//     let basePowered = 1;

//     while (numb/basePowered >= base) {
//         basePowered = basePowered*base;
//         power++;
//     }

//     let thirteenths = 4; // base-13 decimal equivalent

//     for (let i = 0; i <= power+thirteenths; i++) {
//         let auxiliar = Math.floor(numb/basePowered);
//         let letter = ["A","B","C"];

//         if (auxiliar > 9) {
//             auxiliar = letter[auxiliar-10];
//         }

//         numb = numb % basePowered;
//         basePowered = basePowered/base;

//         if (i == power + 1) {
//             newNumber = newNumber + ".";
//         }

//         if (numb == 0) {
//             i = power+thirteenths;
//         }

//         newNumber = newNumber + auxiliar;
//     }

//     return newNumber;
// }


// function mul(a,b) {
//     return numberBase13(a*b);
// }


// console.log(mul(9,6));
