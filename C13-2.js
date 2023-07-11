var meterValue = localStorage.getItem("meterValue") || 0;

document.getElementById("mtr").value = meterValue;
if (meterValue == 3) {
    localStorage.setItem("meterValue",0);
    let btn = document.getElementById("btn");
    btn.disabled = true;
    btn.style.cursor = "default";
}

function incrementValue () {
    meterValue++;
    localStorage.setItem("meterValue",meterValue);
    window.location.reload();
};
