function dataParse (str) {
    return new Function('return ' + str)();
}

let str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
console.log(dataParse(str));
