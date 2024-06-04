import menu from "./menu.js";   // importa a função menu()

// Recebe os elementos do html
const menuBtn = document.querySelector("[data-menu-btn]");
const navMobile = document.querySelector("[data-nav-mobile]");

menu(menuBtn, navMobile);   // Chama a função menu()