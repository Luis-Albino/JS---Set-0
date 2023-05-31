///// creating Cell nodes /////
let containerID = "container";
let container = document.getElementById(containerID);

const cells = 25;
const fragment = new DocumentFragment();

for (let i=0; i<cells; i++) {
    let el = document.createElement("div");
    el.innerText = i;
    fragment.appendChild(el);
};

container.appendChild(fragment);

///// addEventListener /////
///// event delegation /////

container.addEventListener("click",function (event) {
    let target = event.target;
    if (target.id != containerID) window.alert(target.innerText);
})
