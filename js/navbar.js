const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});

window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 50);

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});