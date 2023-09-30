// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
    if (menu.classList.contains("bx-menu")) {
        menu.classList.replace("bx-menu", "bx-x");
    }
    else {
        menu.classList.replace("bx-x", "bx-menu");
    }
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

let link = document.querySelectorAll("nav-link").forEach(() => {
    navbar.classList.toggle("active");
}) 

// Scroll Top 
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
})
