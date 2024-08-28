const btnEncriptar = document.querySelector(".b-encriptar");
const btnDesencriptar = document.querySelector(".b-desencriptar");
const contenido = document.querySelector(".mensaje-encriptado");
const resultado = document.querySelector(".mensaje");
const txtEncriptar = document.querySelector(".encriptar");
const btnCopiar = document.querySelector(".b-copiar"); 

btnEncriptar = Encriptar();
btnDesencriptar = Desencriptar();

function Encriptar(){
    ocultarAdelante();
    let texto = recuperarTexto()
    resultado.textContent = encriptadorTexto(texto);

}
function Desencriptar(){
    ocultarAdelante();
    let texto = recuperarTexto()
    resultado.textContent = desencriptadorTexto(texto);
}

function recuperarTexto(){
    let texto = document.querySelector(".encriptar");
    return texto.value
}

function ocultarAdelante(){
    contenido.classList.add("ocultar");
}

txtEncriptar.addEventListener("click", function() {
    this.value = this.value.toLowerCase();
    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.value = this.value.replace(/[^A-Za-z \n ñ à-ü À-Ü]/g, "");
});

function encriptadorTexto(msj){
    let texto = msj;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptadorTexto(msj){
    let texto = msj;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}

btnCopiar.addEventListener("click", copiar = () => {
    let content = document.querySelector(".mensaje").textContent;
    navigator.clipboard.writeText(content); 
});