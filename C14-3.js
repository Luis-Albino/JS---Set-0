///////////////////////
//// Home template ////
///////////////////////

function homeTemplate () {
    // hide button //
    document.getElementById("btn").style.display = "none";

    // Fill container //
    let container = document.getElementById("container");
    while (container.children[0]) {
        container.children[0].remove();
    };

    fetch('./C14-3.json').then(function (res) {
        return res.json();
    }).then(function (arr) {
        let i = 1;
        for (let obj of arr) {
            let node = document.getElementById("template1").content.cloneNode(true);
            // children //
            let section = node.children[0];
            let number = section.children[0];
            let image = section.children[1];
            let title = section.children[2].children[0];
            let info = section.children[2].children[1];
            // set HTML //
            // number.innerHTML = i;
            image.src = obj["image"];
            title.innerHTML = obj["title"];
            info.innerHTML = obj["info"];
            i++;
            // Events //
            let index = arr.indexOf(obj)
            image.addEventListener("click",function () {openURL(index)})
            title.addEventListener("click",function () {openURL(index)})
            info.addEventListener("click",function () {openURL(index)})
            // Append node //
            container.appendChild(section);
        }
    }).catch(function (err){
        console.log(err)
    });
};


///////////////////////
//// page template ////
///////////////////////

function template (sectionTitle,sectionImg,sectionInfo) {
    // hide button //
    document.getElementById("btn").style.display = "block";
    
    // Fill container //
    let container = document.getElementById("container");
    while (container.children[0]) {
        container.children[0].remove();
    };
    let node = document.getElementById("template2").content.cloneNode(true);
    // children //
    let section = node.children[0];
    let image = section.children[0];
    let title = section.children[1];
    let info = section.children[2];
    // set HTML //
    image.src = sectionImg;
    title.innerHTML = sectionTitle;
    info.innerHTML = sectionInfo;
    // Apend //
    container.appendChild(section);
};


///////////////////////
/////// Open URL //////
///////////////////////

function openURL (index) {
    // Set URL //
    let url = new URLSearchParams(window.location.search);
    if (index != undefined) {
        url.set("index",index);
        window.location.search = url.toString();
    }
    else {
        url.delete("index");
        window.location.search = url.toString();
    }
};

// Get URL //
let url = new URLSearchParams(window.location.search);
let index = url.get("index");
if (index) {
    fetch('./C14-3.json').then(function (res) {
        return res.json();
    }).then(function (arr) {
        let obj = arr[index];
        template(obj["title"],obj["image"],obj["info"]);
    }).catch(function (err){
        console.log(err)
    });
}
else {
    homeTemplate();
}
