var myLib = {
	math: {
		real: {
			add: function (a, b){/*code goes here*/},
			sub: function (a, b){/*code goes here*/},
			mul: function (a, b){/*code goes here*/}
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
              },
        matrix: {
            add: function (a, b){ /*matrix addition*/},
            sub: function (a, b){ /*matrix subtraction*/},
            mul: function (a, b){ /*matrix multiplication*/},
            eye: function (size){ /*identity matrix*/},
            dot: function (m, a){ /*dot product*/},
            times:function(a, b){ /*element-wise multiplication*/}
        }
	}
};

/////////////////////////////////////////////
/////////// EXERCISE EXPRESSION /////////////
/////////////////////////////////////////////

var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22), 
    myLib.math.real.mul(2,5));


var ans = myLib.math.matrix.times(
    myLib.math.matrix.eye(4), 
    myLib.math.complex.sub(
            new myLib.math.complex.Num(
                   myLib.math.real.add(5,2),
                   -3), 
            new myLib.math.complex.Num(3,4)
    )
);

/////////////////////////////////////////////
//////////////// USING "WITH" ///////////////
/////////////////////////////////////////////

with (myLib.math.real) {
    var answerWith = sub(add(20,22),mul(2,5));
  };

with (myLib.math) {
    var ansWith 
        = matrix.times(matrix.eye(4)
                       ,complex.sub(new complex.Num(real.add(5,2),-3)
                                    ,new complex.Num(3,4)));
};


/////////////////////////////////////////////
//// ALTERNATIVE: property destructuring ////
/////////////////////////////////////////////

/* Methods belonging to one single object */
const {Num} = myLib.math.complex;
const {eye,dot,times} = myLib.math.matrix;
 
/* Repeated methods */
var fun = function (lib,method) { return myLib.math[lib][method]};

const addReal = fun("real","add");
const subReal = fun("real","sub");
const mulReal = fun("real","mul");

const addComplex = fun("complex","add");
const subComplex = fun("complex","sub");
const mulComplex = fun("complex","mul");

const addMatrix = fun("matrix","add");
const subMatrix = fun("matrix","sub");
const mulMatrix = fun("matrix","mul");

///// Simplified function calls /////

var answerDestructured = subReal(addReal(20,22),mulReal(2,5));


var ansDestructured = times(eye(4),subComplex(new Num(addReal(5,2),-3),new Num(3,4)));