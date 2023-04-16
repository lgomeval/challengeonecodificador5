function encriptacion(){
    var texto_capturado= document.getElementById("textarea1").value;
    // alert(texto_capturado);
    var texto_modificado= texto_capturado.replace(/[aeiou]/g, function(letra){
        switch(letra){
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                return letra;
        }
    });

    document.getElementById("textarea2").value= texto_modificado;

}    

function desencriptar(){
    // alert("Desencriptando......");
    var texto_emcriptado= document.getElementById("textarea1").value;
    // alert(texto_emcriptado);
    var texto_desemcriptado= texto_emcriptado.replace(/ai|enter|imes|ober|ufat/g, function(letras) {
        switch(letras){
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return letras;
        }
    });

    document.getElementById("textarea2").value= texto_desemcriptado;
}    


function copiar(){
    const button3= document.querySelector("#button3");    
    const textarea2= document.querySelector("#textarea2");
    
    button3.addEventListener("click", ()=> {
        navigator.clipboard.writeText(textarea2.value).then(()=>{
            alert("El contenido se ha copiado");
        })
        .catch((error)=> {
            alert("Error al copiar al codigo", error);
        });
    });
}


var button1= document.getElementById("button1");
button1.onclick= encriptacion;

var button2= document.getElementById("button2");
button2.onclick= desencriptar;

var button3= document.getElementById("button3");
button3.onclick= copiar;
