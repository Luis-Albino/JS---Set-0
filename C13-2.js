function incrementValue () {
    let mtr = document.getElementById("mtr");
    mtr.value += 1;
    if (mtr.value === 3) {
        let btn = document.getElementById("btn");
        btn.disabled = true;
        btn.style.cursor = "default";
    }
};
