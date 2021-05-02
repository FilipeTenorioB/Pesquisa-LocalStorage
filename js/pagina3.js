
/* COMEÇO - PÁGINA 3 */

       const select= document.getElementById("generoLiterario");

       anterior.addEventListener("click", () =>{
          localStorage.setItem("pag3_check", select.value);
        });

        proximo.addEventListener("click", () =>{
         localStorage.setItem("pag3_check", select.value);
        });

        select.value= localStorage.getItem("pag3_check");


/* FIM - PÁGINA 3 */
