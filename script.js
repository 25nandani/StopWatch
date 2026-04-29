const stopbtn= document.getElementById("stop");
const resetbtn= document.getElementById("reset");
const startbtn= document.getElementById("start");
const time = document.getElementById("time");

let sec = 0;
let min = 0;
let hr = 0;
let timer = null;

function watch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
        }
    }
    let h = String(hr).padStart(2, "0");
    let m = String(min).padStart(2, "0");
    let s = String(sec).padStart(2, "0");

    time.innerText = `${h}:${m}:${s}`;

}

function startwatch() {
  if (timer !== null) return; // 🔥 prevent multiple timers

  timer = setInterval(watch, 1000);
}

function stopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetwatch() {
    clearInterval(timer);
    timer = null;
    sec = 0;
    hr = 0;
    min = 0;
    time.innerText = "00:00:00";

}