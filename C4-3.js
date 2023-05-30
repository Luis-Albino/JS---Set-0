class obj {
    #privateVar = 1;

    constructor() {}

    get getValue () {
        return this.#privateVar
    }

    set setValue (x) {
        if (typeof x === "number") this.#privateVar = x;
    } 
}

b = new obj();
console.log("Private variable default value = ",b.getValue); // expected: 1
b.setValue = 2;
console.log("Private variable updated value = ",b.getValue); // expected: 2
b.getValue = "hi"; // expected: value does not changes
console.log(b.privateVar); // expected: undefined


///////////////////////
///// ALTERNATIVE /////
//// using closure ////
///////////////////////

function obj2 () {
    let privateVar = 1;
    return {
        get getValue () {
            return privateVar 
        },
        set setValue (x) {
            if (typeof x === "number") privateVar = x;
        }
    }
}

c = new obj2();
console.log("Private variable default value = ",c.getValue); // expected: 1
c.setValue = 2;
console.log("Private variable updated value = ",c.getValue); // expected: 2
c.setValue = "hi"; // expected: value does not changes
console.log(c.privateVar); // expected: undefined
