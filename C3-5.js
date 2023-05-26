function CustomObject (a, b) {
    this.a = a;
    this.b = b;
};

CustomObject.prototype.c = function () { 
    return this.a + this.b;
};

function printObjProp (object,printOwnProperties) {
    let properties = [];
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            properties.push(prop);
        }
        else if (!printOwnProperties === true){
            properties.push(prop);
        }
    }
    return properties;
};

var obj = new CustomObject (1, 2);

console.log(printObjProp(obj));
