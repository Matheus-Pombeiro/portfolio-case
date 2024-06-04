// Declara uma função para manipular o menu
export default function menu(menuBtn, navMobile) {
    // Escuta o "click" no menu
    menuBtn.addEventListener("click", () => {
        // Muda o display do navbar mobile
        navMobile.style.display === "flex" 
            ? navMobile.style.display = "none" 
            : navMobile.style.display = "flex";
    });

    // Escuta a mudança no tamanho da tela do dispositivo 
    window.matchMedia("(min-width: 1280px)").addEventListener("change", (e) => {
        // Recebe o tamanho da tela sempre que há uma mudança
        const desktopScreen = e.matches;
        // Manipula o display do navbar baseado no tamanho da tela, evitando bugs
        desktopScreen 
            ? navMobile.style.display = "flex" 
            : navMobile.style.display = "none";
    });
};