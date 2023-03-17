const timeInterval = 60000; // 60000 milliseconds = 1min
const tMax = 3600000; // OPTIONAL: clearInterval at 1hr = 3600s = 3600000 milliseconds 
var t = timeInterval; // timer counter for clearInterval

var timer = setInterval(
    function () {
        console.log("elapsed time = "+t/timeInterval+"min");
        if (t === tMax) {clearInterval(timer)};
        t+=timeInterval;
    }
    ,timeInterval);