var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
// var str = "{prop1: 42, prop2: 54, myFn: function(a, b) { return a+b+this.prop1;}, myFn2: function(a) { return a*a;}}";

function dataParse (str) {
    let regexStart = str.search(/^\{/);
    let regexEnd = str.search(/\}$/);
    let objString = str.slice(1+regexStart,regexEnd);
    
    let property = [];
    let value = [];
    let j = 0;
    
    /////////////////////////////////////////////
    
    function setRegexEnd (obj) {
        let rgxEnd = obj.search(/\,/);
        // for the last prop-value pair case //
        if (rgxEnd < 0) {
            rgxEnd = obj.length;
        };
        return rgxEnd
    };
    
    /////////////////////////////////////////////
    
    while(!!objString) {
        regexEnd = objString.search(/\:/);
        property[j] = objString.slice(0,regexEnd);
        objString = objString.slice(regexEnd);
        regexStart = objString.search(/[^\:\s]/);
        regexEnd = setRegexEnd(objString);
        value[j] = objString.slice(regexStart,regexEnd);
        
        /// Look for Methods ///
        containsMethod = (value[j].search(/function/) >= 0)?true:false;
        if (containsMethod) {
            let leftParenth = objString.search(/\(/);
            let rightParenth = objString.search(/\)/);
            let leftBrace = objString.search(/\{/);
            let rightBrace = objString.search(/\}/);
            let funCode = objString.slice(1+leftBrace,rightBrace);
            let argumentSet = objString.slice(1+leftParenth,rightParenth);
            objString = objString.slice(1+rightBrace);
            regexEnd = setRegexEnd(objString);
            objString = objString.slice(regexEnd);
            let method = "function (" + argumentSet + ") {" + funCode + "}";
            value[j] = method;
        };
        
        
        objString = objString.slice(regexEnd);
        regexEnd = objString.search(/[^\,\s*]/);
        objString = objString.slice(regexEnd);
        j++;    
    };
    
    let newObj = {};
    for (let i=0; i<property.length; i++) {
        newObj[property[i]] = value[i];
    }

    return newObj
    
};

var obj = dataParse(str);

console.log(obj);