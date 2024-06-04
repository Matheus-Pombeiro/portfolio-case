// Declara uma função para manipular o menu
export default function menu(menuBtn, navMobile) {
    // Escuta o "click" no menu
    menuBtn.addEventListener("click", () => {
        // Muda o display do navbar mobile
        navMobile.style.display === "flex" 
            ? navMobile.style.display = "none" 
            : navMobile.style.display = "flex";
    });
};