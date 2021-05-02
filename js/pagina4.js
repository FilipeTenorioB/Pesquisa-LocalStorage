
/* COMEÇO - PÁGINA 4 */

        const pag1_nome= document.getElementById("pag1_nome");
        const pag1_text= document.getElementById("pag1_text");

        const pag2_check= document.getElementById("pag2_check");
        const pag2_pergunta= document.getElementById("pag2_pergunta");
        const pag2_text= document.getElementById("pag2_text");

        const pag3_text= document.getElementById("pag3_text");
        const botao= document.getElementById("botao");


        pag1_nome.innerText= localStorage.getItem("pag1_nome");
        pag1_text.innerText= localStorage.getItem("pag1_area");



        if(localStorage.getItem("pag2_sim") == "true"){
            pag2_check.innerText= "Sim";
            pag2_pergunta.innerText= "Disserte sua experiência com E-Books:";
        }
        else if(localStorage.getItem("pag2_nao") == "true"){
            pag2_check.innerText= "Não";
            pag2_pergunta.innerText= "Disserte o porquê de você não aderir a uma leitura digital:";
            
        }
        pag2_text.innerText= localStorage.getItem("pag2_area");

        pag3_text.innerText= localStorage.getItem("pag3_check");

        novaPesquisaBotao.addEventListener("click", () => {
            localStorage.clear();
        })

/* FIM - PÁGINA 4 */