const form = document.querySelector(".formulario-fale-comigo")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}


function removerForm(){
    mascara.style.visibility = "hidden"
    form.style.left= "-300px"
    form.style.transform = "none"
}