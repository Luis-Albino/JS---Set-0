class obj {
    #privateVar = 1;

    constructor() {}

    get value () {
        return this.#privateVar
    }

    set newValue (x) {
        try {
            if (typeof x != "number") 
            throw "newValue() invalid input"
        }
        catch (err) {
            console.log(err)
            return
        }
        this.#privateVar = x
    } 
}

b = new obj();
console.log("Private variable default value = ",b.value); // expected: 1
b.newValue = 2;
console.log("Private variable updated value = ",b.value); // expected: 2
b.newValue = "hi"; // expected: "newValue() invalid input"
console.log(b.privateVar); // expected: "undefined" property


///////////////////////
///// ALTERNATIVE /////
//// using closure ////
///////////////////////

function obj2 () {
    let privateVar = 1;
    return {
        get value () {
            return privateVar 
        },
        set newValue (x) {
            try {
                if (typeof x != "number") 
                throw "newValue() invalid input"
            }
            catch (err) {
                console.log(err)
                return
            }
            privateVar = x
        }
    }
}

c = new obj2();
console.log("Private variable default value = ",c.value); // expected: 1
c.newValue = 2;
console.log("Private variable updated value = ",c.value); // expected: 2
c.newValue = "hi"; // expected: "newValue() invalid input"
console.log(c.privateVar); // expected: "undefined" property
