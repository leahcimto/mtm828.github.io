var i;

function toggleDarkMode() {
    var switchState = document.getElementById("darkModeSwitch").checked;
    var elements = document.querySelectorAll("*");
    for (i=0; i<elements.length; i++) {
        if (!switchState) {elements[i].classList.remove("darkMode");} else {elements[i].classList.add("darkMode");}
    }
    if (switchState) {
        window.localStorage.setItem("darkMode", "true");
    } else {
        window.localStorage.setItem("darkMode", "false");
    }
}
if (window.localStorage == null) {
    window.localStorage.setItem("darkMode", "false");
}
if (window.localStorage.getItem("darkMode") == "true") {
    document.getElementById("darkModeSwitch").checked = true;
    toggleDarkMode();
}
