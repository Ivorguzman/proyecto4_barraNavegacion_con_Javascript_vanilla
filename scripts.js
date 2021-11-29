
const navegacionBarras = document.querySelector(".navegacion-barras");
const links = document.querySelector(".links");

navegacionBarras.addEventListener('click', ()=>{
    // toggle -  / cambia de clase
    links.classList.toggle("mostrar-links");
})