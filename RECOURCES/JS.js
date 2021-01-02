var i;
var storage = window.localStorage;

function toggleDarkMode() {
    var switchState = document.getElementById("darkModeSwitch").checked;
    var elements = document.querySelectorAll("*");
    for (i=0; i<elements.length; i++) {
        if (switchState) {elements[i].classList.remove("darkMode");} else {elements[i].classList.add("darkMode");}
    }
    if (!switchState) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
}
if (localStorage.getItem("darkMode") == undefined) {
    localStorage.setItem("darkMode", "false");
}
if (localStorage.getItem("darkMode") == "true") {
    document.getElementById("darkModeSwitch").checked = true;
    //localStorage.setItem("darkMode", "true");
    toggleDarkMode();
}
