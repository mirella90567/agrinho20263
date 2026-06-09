// Botão Saiba Mais
document.getElementById("saibaMais").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

// Contadores animados
const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {
    const atualizar = () => {
        const alvo = +contador.getAttribute("data-target");
        const atual = +contador.innerText;

        const incremento = alvo / 100;

        if(atual < alvo){
            contador.innerText = Math.ceil(atual + incremento);
            setTimeout(atualizar, 20);
        } else {
            contador.innerText = alvo;
        }
    };

    atualizar();
});
