////////////////////////////////////
///////// Shape Constructor ////////
////////////////////////////////////

function Shape () {
    let edges = [];
    for (el in arguments) {
        edges[el] = arguments[el];
    }
    this["pEdges"] = edges;
};
// Shape constructor METHODS
Shape.prototype["fnDisplay"] = function () {
    console.log("Figure with " + this["pEdges"].length + " edge" + (this["pEdges"].length>1?"s":""))
};



////////////////////////////////////
//// Quadrilateral Constructor /////
////////////////////////////////////

function Quadrilateral (length1,length2,length3,length4) {
    Shape.apply(this,[length1,length2,length3,length4]);
};

// Set proto-chain //

Quadrilateral.prototype.__proto__ = Shape.prototype;

// Additional METHODS //

Quadrilateral.prototype.__proto__["fnPerimeter"] = function () {
    let perimeter = 0;
    for (let i=0; i< this.pEdges.length; i++) {
        perimeter += this.pEdges[i];
    };
    console.log("This figure's perimeter is = " + perimeter);
};

Quadrilateral.prototype["fnArea"] = function () {
    let area = 1;
    for (let i=0; i< this.pEdges.length; i++) {
        area = area*this.pEdges[i];
    };
    area = Math.sqrt(area);
    console.log("This figure's area is = " + area);
};



////////////////////////////////////
//////// Square Constructor ////////
////////////////////////////////////

function Square (size) {
    Quadrilateral.apply(this,[size,size,size,size]);
};

// Inherit Quadrilateral.prototype METHODS //

Square.prototype = Quadrilateral.prototype



////////////////////////////////////
/////// Rectangle Constructor //////
////////////////////////////////////

function Rectangle (length1,length2) {
    Quadrilateral.apply(this,[length1,length1,length2,length2]);
};

// Inherit Quadrilateral.prototype METHODS //

Rectangle.prototype = Quadrilateral.prototype



////////////////////////////////////
/////// Triangle Constructor ///////
////////////////////////////////////

function Triangle (length1,length2,length3) {
    Shape.apply(this,[length1,length2,length3]);
};

// Set proto-chain //

Triangle.prototype.__proto__ = Shape.prototype;

// Additional METHODS //

Triangle.prototype["fnArea"] = function () {
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



////////////////////////////////////
/////// Penthagon Constructor //////
////////////////////////////////////

function Pentagon (size) {
    Shape.apply(this,[size,size,size,size,size]);
};

// Set proto-chain //

Pentagon.prototype.__proto__ = Shape.prototype;

// Additional METHODS //

Pentagon.prototype["fnArea"] = function () {
    let alpha = Math.PI*54/180;
    let beta = Math.PI*72/180;
    let area = 2.5*(this.pEdges[0])*(this.pEdges[0])*(Math.sin(alpha))
    *(Math.sin(alpha))/(Math.sin(beta));
    console.log("Triangle area = " + area);
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

console.log("  SQUARE  ");
console.log(objSquare);
objSquare.fnDisplay();
objSquare.fnArea();
objSquare.fnPerimeter();

console.log("  RECTANGLE  ");
console.log(objRectangle);
objRectangle.fnDisplay();
objRectangle.fnArea();
objRectangle.fnPerimeter();

console.log("  PENTAGON  ");
console.log(objPentagon);
objPentagon.fnDisplay();
objPentagon.fnArea();
objPentagon.fnPerimeter();
