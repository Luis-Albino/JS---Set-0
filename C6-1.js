////////////////////////////////////
//////////// Shape Class ///////////
////////////////////////////////////

class Shape {
    constructor () {
        let edges = [];
        for (let el in arguments) {
            edges[el] = arguments[el];
        }
        this["pEdges"] = edges;
    }

    fnDisplay () {
        console.log("Figure with " + this["pEdges"].length + " edge" + (this["pEdges"].length>1?"s":""))
    }
};


////////////////////////////////////
/////// Quadrilateral Class ////////
////////////////////////////////////

class Quadrilateral extends Shape {

    constructor (length1,length2,length3,length4) {
        super(length1,length2,length3,length4)
    }

    fnPerimeter () {
        let perimeter = 0;
        for (let i=0; i< this.pEdges.length; i++) {
            perimeter += this.pEdges[i];
        };
        console.log("This figure's perimeter is = " + perimeter);
    };
    
    fnArea () {
        let area = 1;
        for (let i=0; i< this.pEdges.length; i++) {
            area = area*this.pEdges[i];
        };
        area = Math.sqrt(area);
        console.log("This figure's area is = " + area);
    };
};

////////////////////////////////////
///////// Rectangle Class //////////
////////////////////////////////////

class Rectangle extends Quadrilateral {
    constructor (length1,length2) {
        super(length1,length1,length2,length2)
    }
};

////////////////////////////////////
/////////// Square Class ///////////
////////////////////////////////////

class Square extends Rectangle {
    constructor (size) {
        super(size,size);
    }
};

////////////////////////////////////
////////// Triangle Class //////////
////////////////////////////////////

class Triangle extends Shape {
    constructor (length1,length2,length3) {
        super(length1,length2,length3);
    }

    fnPerimeter () {
        let perimeter = 0;
        for (let i=0; i< this.pEdges.length; i++) {
            perimeter += this.pEdges[i];
        };
        console.log("This figure's perimeter is = " + perimeter);
    };

    fnArea () {
        let x2 = this.pEdges[0];
        let y2 = this.pEdges[1];
        let z2 = this.pEdges[2];
        x2 = x2*x2;
        y2 = y2*y2;
        z2 = z2*z2;
        let area = x2 + y2 - z2;
        area = 0.5*Math.sqrt(x2*y2-area*area);
        console.log("Triangle area = " + area);
    };
};

////////////////////////////////////
////////// Penthagon Class /////////
////////////////////////////////////

class Pentagon extends Shape {
    constructor (size) {
        super(size,size,size,size,size);
    }
    fnArea () {
        let alpha = Math.PI*54/180;
        let beta = Math.PI*72/180;
        let area = 2.5*(this.pEdges[0])*(this.pEdges[0])*(Math.sin(alpha))
        *(Math.sin(alpha))/(Math.sin(beta));
        console.log("Triangle area = " + area);
    };
};

////////////////////////////////////
///////// Creating objects /////////
////////////////////////////////////

var objTriangle = new Triangle (1,1,Math.sqrt(2));
var objSquare = new Square (2);
var objRectangle = new Rectangle (2,3);
var objPentagon = new Pentagon (1);

console.log("  TRIANGLE  ");
console.log(objTriangle);
objTriangle.fnDisplay();
objTriangle.fnArea();
objTriangle.fnPerimeter();

console.log("  RECTANGLE  ");
console.log(objRectangle);
objRectangle.fnDisplay();
objRectangle.fnArea();
objRectangle.fnPerimeter();

console.log("  SQUARE  ");
console.log(objSquare);
objSquare.fnDisplay();
objSquare.fnArea();
objSquare.fnPerimeter();

console.log("  PENTAGON  ");
console.log(objPentagon);
objPentagon.fnDisplay();
objPentagon.fnArea();



//////////////////////////
///// My Own Example /////
////////// ZOO ///////////
//////////////////////////

let Animal = (function () {
    let animals = {
        "terrestrial": 0,
        "aquatic": 0
    };
    return function (type) {
        try {
            if (!type === "terrestrial" || !type === "aquatic")
            throw "invalid type"
        }
        catch (err) {
            return null
        };

        this["type"] = type;
        animals[type]++;
        this.resume =  function () {
            return "There are " + animals["terrestrial"] + " terrestrial and " 
                   + animals["aquatic"] + " aquatic animals"
        }

    }
})();

function Mammal (species,habitat,foodHabit) {
    Animal.call(this,"terrestrial")
    this["species"] = species;
    this["habitat"] = habitat;
    this["foodHabit"] = foodHabit;
};

Mammal.prototype.nutrition = function () {
    let foodHabit = this["foodHabit"];
    let food;
    if (foodHabit === "carnivore") {
        food = "This " + this["species"] + " likes the meat"
    }
    else if (foodHabit === "herbivore") {
        food = "This " + this["species"] + " eats plants"
    }
    return food
}

class Lion extends Mammal {
    constructor () {
        super("feline","grasslands","carnivore")
    }
};
let Simba = new Lion();

console.log(Simba.resume())
console.log(Simba.nutrition())
