//Cuando buscamos modificar el valor de un input html, generalmente utilizamos la
//const inputOne = document.getElementById("inputText").value;
//La estructura de como interactuamos con el DOOM en JS es la siguiente:
//1. Palabra reservada: document (es el documento html)
//2. Utilizamos el método o API -> getElementById()
//3. Utilizamos el atributo del elemento, que en este caso conocemos previamente, que es un input -> value

document.getElementById("iniciarSesion").addEventListener("click", function () {
    const nombre = document.querySelector("#userName input").value.trim();
    const password = document.querySelector("#pass input").value.trim();

    if (nombre === "") {
        alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    } else if (password === "") {
        alert ("Contraseña incorrecta")
    } else if (password.length >= 8) {
        const mensaje = document.getElementById("mensaje");
        mensaje.className = "valid";
    } else{
        alert("Registro completo" + nombre + "!");
    }
});