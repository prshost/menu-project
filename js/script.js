let btnMenu = document.querySelector(".btn-menu");
let navbar = document.querySelector(".navbar");

btnMenu.onclick = (e) => {
    btnMenu.classList.toggle('active')
    navbar.classList.toggle('active')
}