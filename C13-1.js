///// creating Cell nodes /////

let container = document.getElementById("container");

const cells = 25;

for (let i=0; i<cells; i++) {
    let el = document.createElement("div");
    el.innerText = i;
    container.appendChild(el);
};

///// addEventListener /////
///// event delegation /////

container.addEventListener("click",function (event) {
    let target = event.target;
    window.alert(target.innerText);
});
