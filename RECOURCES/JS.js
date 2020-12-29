var i;

window.onscroll = function(){updateTopNavbar()};
var navbar = document.getElementById("topNav");
var sticky = navbar.offsetTop;
function updateTopNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function toggleDarkMode() {
    var elements = document.querySelectorAll("*");
    var i;
    for (i=0; i<elements.length; i++) {
        elements[i].classList.toggle("darkMode");
    }
    if (localStorage.getItem("darkMode") == "false") {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
}
var storage = window.localStorage;
if (localStorage.getItem("darkMode") == undefined) {
    localStorage.setItem("darkMode", "false");
}
for (i = 0; i < document.querySelectorAll("*").length; i++) {
    document.querySelectorAll("*")[i].style.transition="0s";
}
if (localStorage.getItem("darkMode") == "true") {
    toggleDarkMode();
    document.getElementById("darkModeSwitch").checked = true;
    localStorage.setItem("darkMode", "true");
}
function afterLoad() {
    for (i = 0; i < document.querySelectorAll("*").length; i++) {
        document.querySelectorAll("*")[i].style.transition="1s";
    }
}
window.addEventListener('load', afterLoad, false );

function fetchJson(url) {
    var data;
    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
        }
    }
    ajax.open("GET", url, true);
    ajax.send();
    return data;
}
