class obj {
    #privateVar = 1;

    constructor() {}

    get getVar () {
        return this.#privateVar
    }

    set setVar (x) {
        if(typeof x === "number") {
            this.#privateVar = x
        }
        else {
            console.log("setVar() invalid input");
        };
    } 
}

b = new obj();
console.log("Private variable default value = ",b.getVar); // expected: 1
b.setVar = 2;
console.log("Private variable updated value = ",b.getVar); // expected: 2
b.setVar = "hi"; // expected: "setVar() invalid input"
console.log(b.privateVar); // expected: "undefined" property


///////////////////////
///// ALTERNATIVE /////
//// using closure ////
///////////////////////

function obj2 () {
    let privateVar = 1;
    return {
        get getVar () {
            return privateVar 
        },
        set setVar (x) {
            if(typeof x === "number") {
                privateVar = x
            }
            else {
                console.log("setVar() invalid input");
            };
        }
    }
}

c = new obj2();
console.log("Private variable default value = ",c.getVar); // expected: 1
c.setVar = 2;
console.log("Private variable updated value = ",c.getVar); // expected: 2
c.setVar = "hi"; // expected: "setVar() invalid input"
console.log(c.privateVar); // expected: "undefined" property