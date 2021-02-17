var i;
var j;
var darkmode;
function toggleDarkMode() {
    var elements = document.querySelectorAll("*");
    for (i=0; i<elements.length; i++) {
        if (darkMode) {elements[i].classList.add("darkMode");} else {elements[i].classList.remove("darkMode");}
    }
    if (darkMode) {
        window.localStorage.setItem("darkMode", "true");
    } else {
        window.localStorage.setItem("darkMode", "false");
    }
}

window.onload = function() {
    window.setInterval(toggleDarkMode, 100);
    if (window.localStorage == null) {window.localStorage.setItem("darkMode", "false");}
    if (window.localStorage.getItem("darkMode") == "true") {
        darkMode = true;
    } else {
        darkMode = false;
    }
}
