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
    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", true);
    } else {
        localStorage.setItem("darkMode", false);
    }
}
var storage = window.localStorage;
if (localStorage.getItem("darkMode") == undefined) {
    localStorage.setItem("darkMode", false);
}
if (dlocalStorage.getItem("darkMode") == true) {
    toggleDarkMode();
}
