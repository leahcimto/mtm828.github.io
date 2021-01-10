var i;
var j;

function silentIframeLogs() {
    var elements = document.querySelectorAll('iframe');
    for (i=0; i<elements.length; i++) {
        elements[i].console.log = function() {}
}

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

silentIframeLogs();
window.setInterval(toggleDarkMode, 100);
window.onload = function() {
    if (window.localStorage == null) {window.localStorage.setItem("darkMode", "false");}
    if (window.localStorage.getItem("darkMode") == "true") {
        document.getElementById("darkModeSwitch").checked = true;
    } else {
        document.getElementById("darkModeSwitch").checked = false;
    }
    setTimeout(function() {document.querySelector("#loadingScreen").style.display = "none";}, 2000)
}
