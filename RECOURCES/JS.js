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
if (localStorage.getItem("darkMode") == "true") {
    for (i = 0; i < querySelectorAll("*").length; i++) {
        querySelectorAll("*")[i].style.transition="transition: 0s;";
    }
    toggleDarkMode();
    document.getElementById("darkModeSwitch").checked = true;
    localStorage.setItem("darkMode", "true");
    for (i = 0; i < querySelectorAll("*").length; i++) {
        querySelectorAll("*")[i].style.transition="";
    }
}
