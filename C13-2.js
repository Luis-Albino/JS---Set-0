function button () {
    /// The button ///
    let btn = document.createElement("button");
    btn.setAttribute("type","button");
    btn.style.cursor = "pointer";
    btn.innerText = "Click me"
    document.body.appendChild(btn);

    //// CLOSURE parameter /////
    let meterValue = 0; // Stored at incrementValue() closure

    /// The meter ///
    let meter = document.createElement("meter");
    meter.style.position = "relative";
    meter.style.left = "10px";
    meter.setAttribute("value",meterValue);
    meter.setAttribute("min",0);
    meter.setAttribute("max",3);
    meter.setAttribute("high",2);
    document.body.appendChild(meter);

    function incrementValue () {
        meterValue++;
        meter.setAttribute("value",meterValue);
        if (meterValue==3) {btn.disabled = true;
            btn.style.cursor = "default";};
    };

    btn.addEventListener("click",incrementValue);

    document.body.appendChild(document.createElement("br"));
};

button();
button();
button();