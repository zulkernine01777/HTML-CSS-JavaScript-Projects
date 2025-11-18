let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = false;

document.getElementById("start").onclick = function () {
    timer = true;
    stopwatch();
};

document.getElementById("stop").onclick = function () {
    timer = false;
};

document.getElementById("reset").onclick = function () {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
};

function stopwatch() {
    if (timer) {
        ms += 1;

        if (ms == 100) {     
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        let h = hr < 10 ? "0" + hr : hr;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;
        let ms_show = ms < 10 ? "0" + ms : ms;

        document.getElementById("display").innerHTML =
            `${h}:${m}:${s}:${ms_show}`;

        setTimeout(stopwatch, 10); 
    }
}
