document.querySelectorAll(".menu").forEach((menu) => {
    const botao = menu.querySelector(".menu-toggle");
    const links = menu.querySelector(".menu-links");

    if (!botao || !links) {
        return;
    }

    const fecharMenu = () => {
        menu.classList.remove("menu-aberto");
        botao.setAttribute("aria-expanded", "false");
    };

    botao.addEventListener("click", () => {
        const aberto = menu.classList.toggle("menu-aberto");
        botao.setAttribute("aria-expanded", String(aberto));
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });
});
