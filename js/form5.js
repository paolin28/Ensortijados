function validar_confirmar_correo(confcorreo) {

    var correo = correo;
    var confcorreo = confcorreo;

    if (correo ==''){
        alert("Campo correo vacío");
    
    }

    if(confcorreo == '') {
        alert("Campo confirmar correo vacío");
    
    }

    if(correo == confcorreo){
        alert("son iguales");
    
    }

    if(correo != confcorreo){
        alert("no son iguales");
    
    }
    
    return true;
    
}

function validar_pais(pais) {

    var ichars = /[a-z-0-9]/;
    var reg = /[0-9]/;
    var pais = pais;
 
    if(pais == '') {
        alert("debe ingresar un valor en el campo");
    }

    if (reg.test(pais)){
        alert("El campo contiene números");
        return false
    }

    if(ichars.test(pais)){
        alert("El campo contiene caracteres inválidos");
        return true
    }
    

    if (pais.charAt(0).toUpperCase() != pais.charAt(0) || pais.slice(-1) != pais.toLowerCase()){
        console.log("Format correcto?")
    }


}

module.exports.validar_confirmar_correo = validar_confirmar_correo
module.exports.validar_pais = validar_pais;

