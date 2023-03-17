///// Container /////

let container = document.createElement("div");
let containerStyle = container.style;

containerStyle.width = 430 + "px";
containerStyle.height = "auto";
containerStyle.border = "3px solid black";
containerStyle.position = "relative";
containerStyle.left = "50%";
containerStyle.top = "50px";
containerStyle.transform = "translate(-50%,0)";
containerStyle.fontSize = "30px";
containerStyle.display = "flex";
containerStyle.flexDirection = "row";
containerStyle.flexWrap = "wrap";

document.body.appendChild(container);

///// creating Cell nodes /////

const cells = 25;

for (let i=0; i<cells; i++) {
    let el = document.createElement("div");
    let elStyle = el.style;

    el.innerText = i;

    elStyle.width = 80 + "px";
    elStyle.height = 80 + "px";
    elStyle.border = "3px solid black";
    elStyle.fontSize = "30px";
    elStyle.position = "relative";
    elStyle.display = "flex";
    elStyle.alignItems = "center";
    elStyle.justifyContent = "center";
    elStyle.cursor = "pointer";

    container.appendChild(el);
};

///// addEventListener /////
///// event delegation /////

container.onclick = function (event) {
    let target = event.target;
    (function () {window.alert(target.innerText);})();
};