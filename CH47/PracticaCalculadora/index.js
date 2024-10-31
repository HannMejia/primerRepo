let resultado;

/*function onInputChange(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
}*/

function operacionAritmetica (typeOperacion) {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    switch (typeOperacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            resultado = numero1 / numero2;
            break;
        default:
            alert ("Sintax Error");  
    }
    document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
}