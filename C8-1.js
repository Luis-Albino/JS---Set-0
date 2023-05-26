const timeInterval = 60000; // 60000 milliseconds = 1min
const tMax = 3600000; // OPTIONAL: clearInterval at 1hr = 3600s = 3600000 milliseconds 
var t = timeInterval; // timer counter for clearInterval

let pronoun = ["My","Your","His","Her","Our","Their"];
let adjective = ["awesome","awful","old","new"];
let noun = ["car","house","bike","boat","computer"];

function randomElementFrom(array) {
    let index = Math.floor((array.length)*Math.random())
    return array[index]
};

var timer = setInterval(
    function () {
        // console.log("elapsed time = "+t/timeInterval+"min");
        console.log(randomElementFrom(pronoun),randomElementFrom(adjective),randomElementFrom(noun));
        if (t === tMax) {clearInterval(timer)};
        t+=timeInterval;
    }
    ,timeInterval);
