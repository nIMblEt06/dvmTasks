const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const menuBtn = document.getElementsByClassName('menuBtn')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    menuBtn.classList.toggle('open')
})
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
