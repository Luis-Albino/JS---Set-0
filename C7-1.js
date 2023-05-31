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

    /* Checks wether it is in hex format */
    if (hexNumber.length != 7 || hexNumber.slice(0,1) != "#") return undefined;

    let match = hexNumber.match(/[0-9a-f]{2}/gi);
    console.log(match)
    if (match.length < 3) return undefined;

    /* Computes rgb */
    for (let i in match) {
        rgb[i] = toBase10(match[i])
    }

    return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";

};

console.log(toRGB("#3020ff"))
