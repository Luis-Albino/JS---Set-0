///// Convert number from base 16 to base 10 /////

function toBase10 (base16) {
    let base10 = parseInt(base16,16);
    if (!base10) {
        return undefined
    }
    else {
        return base10
    }
};

///// CONVERT TO RGB /////

function toRGB (hexNumber) {
    let rgb = [];

    let hexFormat = hexNumber.match(/^\#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);

    /* Checks wether it is in hex format */
    if (!hexFormat) return undefined;

    /* Computes rgb */
    for (let i=1; i<4; i++) {
        rgb[i] = toBase10(hexFormat[i])
    }

    return "rgb("+rgb[1]+","+rgb[2]+","+rgb[3]+")";

};

console.log(toRGB("#3020ff"))
