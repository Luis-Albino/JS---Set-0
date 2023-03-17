const timeInterval = 1000; // 15000 milliseconds = 15s
const tMax = 3600000; // OPTIONAL: clearInterval at 1hr = 3600s = 3600000 milliseconds 
var t = timeInterval; // timer counter for triggering clearInterval

function A(time) {
    console.log("A-function triggered at "+Math.floor(time/60000)+"min and "+(time%60000)/1000+"sec");
}

function B(time) {
    console.log("B-function triggered at "+Math.floor(time/60000)+"min");
}

function C(time) {
    console.log("C-function triggered at "+Math.floor(time/60000)+"min and "+(time%60000)/1000+"sec");
}


///// Trigger function /////

function trigger (func,time,triggerAt) {
    if (!(time%triggerAt)) {
        func(time);
    };
}

///// setInterval /////

var timer = setInterval(
    function () {
        console.log("t = "+t/1000+"s");

        /* trigger functions */
        trigger(A,t,30000);
        trigger(B,t,60000);
        trigger(C,t,75000);

        /* clearInterval */
        if (t === tMax) {clearInterval(timer)};

        /* Update time */
        t+=timeInterval;
    }
    ,timeInterval);