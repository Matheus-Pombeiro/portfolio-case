import menu from "./menu.js";

// Recebe os elementos do html
const menuBtn = document.querySelector("[data-menu-btn]");
const navMobile = document.querySelector("[data-nav-mobile]");

menuBtn.addEventListener("click", () => console.log("clickou"))

menu(menuBtn, navMobile);