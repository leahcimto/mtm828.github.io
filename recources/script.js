var i;

function toggleDarkMode() {
    var switchState = document.getElementById("darkModeSwitch").checked;
    var elements = document.querySelectorAll("*");
    for (i=0; i<elements.length; i++) {
        if (switchState) {elements[i].classList.remove("darkMode");} else {elements[i].classList.add("darkMode");}
    }
    if (switchState) {
        window.localStorage.setItem("darkMode", "false");
    } else {
        window.localStorage.setItem("darkMode", "true");
    }
}

if (window.localStorage == null) {window.localStorage.setItem("darkMode", "false");}
if (window.localStorage.getItem("darkMode") == "true") {
    document.getElementById("darkModeSwitch").checked = true;
} else {
    document.getElementById("darkModeSwitch").checked = false;
}
toggleDarkMode();

function hideLoadingScreen() {var screen = document.getElementById("loadingScreen"); screen.style.display = "none";}

function initDesc() {
    ajax = new XMLHttpRequest();
    ajax.responceType = "json";
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(JSON.parse(JSON.stringify(this.responseText)));
            desc = document.getElementById("description");
            desc.innerHTML = "<div style=\"text-align: center;\"><p style=\"font-family: abel;\">Hey there, I'm " + json.me.name + "!</p><br>";
            desc.innerHTML += "<p>I code in:</p><ul>"
            for (i = 0; i < json.me.knows.length; i++) {
                desc.innerHTML += "<li style=\"transition: 0s;\">" + json.me.knows[i] + "</li>";
            }
            desc.innerHTML += "</ul></div><br>"
        }
    }
    ajax.open("GET", "/recources/json/description.json", true);
    ajax.send();
}
window.onload = function () {
    if (localStorage.getItem("darkMode") == "true") {
        document.getElementById("darkModeSwitch").checked = true;
        localStorage.setItem("darkMode", "true");
        toggleDarkMode();
    }
    setTimeout(function () {
        hideLoadingScreen();
        initDesc();
    }, 1000);
}
