function printAttr (element,attributes) {
    for (let attr of attributes) {
        let value = element.getAttribute(attr);
        if (value) {
            console.log(value);
        }
        else {
            console.log(attr,"is undefined");
        }
    }
}

printAttr(document.getElementById("a"),["id","class","style","val"]);
