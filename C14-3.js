import myJson from "./C14-3.json" assert {type: "json"};


/////////////////////////
// template's background //
/////////////////////////

function newTemplate (tempName) {
    let template = document.createElement("OL");
    template.id = tempName;
    template.className = tempName;
    document.body.appendChild(template);

    return template
}


////////////////////////
////// TEMPLATE 1 //////
////////////////////////

function templateType1 () {

    let template = newTemplate("template");
    let fragment = document.createDocumentFragment(); // FRAGMENT

    for (let data in myJson) {
        let li = document.createElement("LI");

        let img = document.createElement("IMG");
        img.setAttribute("src",myJson[data].image);

        let dataDiv = document.createElement("DIV");
        dataDiv.className = "data";

        let title = document.createElement("H2");
        title.className = "title";
        title.innerHTML = myJson[data].title;

        let info = document.createElement("P");
        info.className = "info";
        info.innerHTML = myJson[data].info;

        dataDiv.appendChild(title);
        dataDiv.appendChild(info);
        li.appendChild(img);
        li.appendChild(dataDiv);
        // template.appendChild(li); // instead of fragments
        fragment.appendChild(li); // FRAGMENT

        // add event listeners //
        img.addEventListener("click",function () { open(data) });
        title.addEventListener("click",function () { open(data) });
        info.addEventListener("click",function () { open(data) });
    };
    template.appendChild(fragment); // FRAGMENT
};


////////////////////////
////// TEMPLATE 2 //////
////////////////////////

function templateType2 (data) {
    let template = newTemplate("template");

    let div = document.createElement("DIV");

    let img = document.createElement("IMG");
    img.setAttribute("src",myJson[data].image);
    img.style.float = "left";
    img.style.margin = "0px 20px 0px 20px";

    let title = document.createElement("H2");
    title.className = "title";
    title.innerHTML = myJson[data].title;
    title.style.margin = "20px";

    let info = document.createElement("P");
    info.className = "info";
    info.innerHTML = myJson[data].info;
    info.style.margin = "20px";

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(info);
    template.appendChild(div);
};


////////////////////////
//// function OPEN /////
////////////////////////

function open (data) {
    let win = window.open("http://127.0.0.1:5555/C14-3.html", data, "");
}


////////////////////////
// Template rendering //
////////////////////////


if (!window.opener) {
    templateType1();
}
else {
    newButton(window.opener);
    templateType2 (window.name);
};


////////////////////////
//////// BUTTON ////////
////////////////////////

function newButton (windowOpener) {
    let btn = window.document.createElement("BUTTON");
    btn.setAttribute("type","button");
    btn.addEventListener("click",function () {windowOpener.close()});

    let anchor = window.document.createElement("A");
    anchor.setAttribute("href","http://127.0.0.1:5555/C14-3.html");
    anchor.innerHTML = "<< go back";

    btn.appendChild(anchor);
    document.body.appendChild(btn);
};





