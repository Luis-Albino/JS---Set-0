function type (obj) {
    let objType = typeof obj;

    /* array type */
    if (Array.isArray(obj)) {
        objType = "array";
    };

    /* float type */
    if (objType === "number" && !!(obj-Math.floor(obj)) === true) {
        objType = "float";
    };

    return objType
}

function dataType () {
    let stringType = "";
    for (let el in arguments) {
        stringType =  stringType + type(arguments[el]) + ",";
    };
    console.log(stringType);
};

dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {});
