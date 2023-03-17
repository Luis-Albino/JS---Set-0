const myMath = {
    add : function () {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        return sum
    },

    mul : function () {
        let mult;
        if (arguments.length > 0){
            mult = 1;
            for (let i = 0; i < arguments.length; i++) {
                mult = mult*arguments[i];
            }
        }
        return mult
    },

    fac : function (numb) {
        let fact = numb;
        while (numb > 1) {
            numb--;
            fact = fact*numb;
        }
        return fact
    }
};


console.log(myMath.fac(6))