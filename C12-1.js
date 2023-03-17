var el = document.getElementById("a");

function printAttr (element,attributes) {
    for (attr in attributes) {
        let value = element.getAttribute(attributes[attr]);
        if (!!value) {
            console.log(value);
        }
        else {
            console.log(attributes[attr]+" is undefined");
        }
    }
}

printAttr(el,["id","class","style","val"]);