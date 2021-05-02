
/* COMEÇO - PÁGINA 2 */

        const sim = document.getElementById("escolha-sim");
        if(localStorage.getItem("pag2_sim") == "true"){
            sim.checked = true; 
        }
        else{
            sim.checked= false;
        }
        const nao = document.getElementById("escolha-nao");
        if(localStorage.getItem("pag2_nao") == "true"){
            nao.checked = true;
        }
        else{
            nao.checked= false;
        }
        const caso_sim= document.getElementById("caso_escolha-sim");
        const caso_nao= document.getElementById("caso_escolha-nao");
        const proximo= document.getElementById("proximo");
        const anterior= document.getElementById("anterior");
        const text= document.getElementById("resposta-Ebooks");
        const text2= document.getElementById("resposta-Aderir");

        sim.addEventListener("click", () => {
            caso_sim.style.display= "block";
            caso_nao.style.display= "none";
        });

        nao.addEventListener("click", () => {
            caso_sim.style.display= "none";
            caso_nao.style.display= "block";
        });

        proximo.addEventListener("click", () => {
            if(sim.checked){
                localStorage.setItem("pag2_sim", sim.checked);
                localStorage.setItem("pag2_nao", nao.checked);
                localStorage.setItem("pag2_area", text.value);
            }
            else{
                localStorage.setItem("pag2_sim", sim.checked);
                localStorage.setItem("pag2_nao", nao.checked);
                localStorage.setItem("pag2_area", text2.value);
            }
        });

        anterior.addEventListener("click", () => {
            if(sim.checked){
                localStorage.setItem("pag2_sim", sim.checked);
                localStorage.setItem("pag2_nao", nao.checked);
                localStorage.setItem("pag2_area", text.value);
            }
            else if(nao.checked){
                localStorage.setItem("pag2_sim", sim.checked);
                localStorage.setItem("pag2_nao", nao.checked);
                localStorage.setItem("pag2_area", text2.value);
            }
        });

        if(sim.checked){
            caso_sim.style.display= "block";
            caso_nao.style.display= "none";
            text.value= localStorage.getItem("pag2_area");
        }
        else if(nao.checked){
            caso_sim.style.display= "none";
            caso_nao.style.display= "block";
            text2.value= localStorage.getItem("pag2_area");
        }

        else{
            caso_sim.style.display= "none";
            caso_nao.style.display= "none";
        }

/* FIM - PÁGINA 2 */
