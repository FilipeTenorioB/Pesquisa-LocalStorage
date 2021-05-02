/* COMEÇO - INDEX */

const botao = document.getElementById("next");

    botao.addEventListener("click", () => {
        const nome = document.getElementById("resposta-Nome");
        const textarea = document.getElementById("resposta-Importancia");
        localStorage.setItem("pag1_nome", nome.value);
        localStorage.setItem("pag1_area", textarea.value);
    }); 

document.getElementById("resposta-Nome").value = localStorage.getItem("pag1_nome");
document.getElementById("resposta-Importancia").value = localStorage.getItem("pag1_area");

/* FIM - INDEX */