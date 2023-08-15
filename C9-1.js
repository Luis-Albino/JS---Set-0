function dataParse (str) {
    
    str = str.replace(/([^\s,{]+):/g, '"$1":');
    str = str.replace(/(function\s?\(.+\)\s?{[^}]+})/g, '"$1"');

    let obj = JSON.parse(str);
    for (let prop in obj) {
        let fn = new Function('return ' + obj[prop])();
        obj[prop] = fn;
    }
    return obj
}

let str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
console.log(dataParse(str));
