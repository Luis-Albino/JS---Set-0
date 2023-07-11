class obj {
    #privateVar = 1;

    constructor() {}

    get privateValue () {
        return this.#privateVar
    }

    set privateValue (x) {
        if (typeof x === "number") this.#privateVar = x;
    } 
}

b = new obj();
console.log("Private variable default value = ",b.privateValue); // expected: 1
b.privateValue = 2;
console.log("Private variable updated value = ",b.privateValue); // expected: 2
b.privateValue = "hi"; // expected: value does not changes
console.log(b.privateVar); // expected: undefined


///////////////////////
///// ALTERNATIVE /////
//// using closure ////
///////////////////////

function obj2 () {
    let privateVar = 1;
    return {
        get privateValue () {
            return privateVar 
        },
        set privateValue (x) {
            if (typeof x === "number") privateVar = x;
        }
    }
}

c = new obj2();
console.log("Private variable default value = ",c.privateValue); // expected: 1
c.privateValue = 2;
console.log("Private variable updated value = ",c.privateValue); // expected: 2
c.privateValue = "hi"; // expected: value does not changes
console.log(c.privateVar); // expected: undefined
