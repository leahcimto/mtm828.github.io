var i;
var j;

function sleep(dur) {return new Promise(resolve => setTimeout(resolve, dur));}

function toggleDarkMode() {
    var switchState = document.getElementById("darkModeSwitch").checked;
    var elements = document.querySelectorAll("*");
    for (i=0; i<elements.length; i++) {
        if (switchState) {elements[i].classList.add("darkMode");} else {elements[i].classList.remove("darkMode");}
    }
    if (switchState) {
        window.localStorage.setItem("darkMode", "true");
    } else {
        window.localStorage.setItem("darkMode", "false");
    }
}

window.setInterval(toggleDarkMode, 100);
window.onload = function () {
    if (window.localStorage == null) {window.localStorage.setItem("darkMode", "false");}
    if (window.localStorage.getItem("darkMode") == "true") {
        document.getElementById("darkModeSwitch").checked = true;
    } else {
        document.getElementById("darkModeSwitch").checked = false;
    }
    sleep(2000);
    document.querySelector("#loadingScreen").style.display = "none";
}
