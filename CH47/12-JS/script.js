//Para no dejar un campo vacio


//elemento que es registrarsecrear este evento en mi boton que ya tengo en html
document.getElementbyID("registrarse").addEvenListener("click", function () {
    const nombre = document.querySelector("#nombre input").value.trim(); //este elemento nos ayuda a que los espacios de inicio y del final los elimine
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();

    if (nombre === "") { // === es estricta igualdad es que todos los campos deben contener algo y no pueden avanzar y las comillas "" siegnifica que va un string y mi usuario no lo puede dejar vacio
        alert("Por favor ingresa tu nombre, no puede quedar vacio");
    } else if (email === "") {
        alert("Oshe, esto no puede estar vacío");
    } else if (!email.include ("@")){ //Se agrega el signo de negacion porque si no le pone el @ no se cumple lo que quiero y lanzara true
        alert("Correo no aceptado");
    } else if (password === ""){
        alert ("Contraseña incorrecta")
    } else if (password.length >8){ //esto es para poner que minimo tiene que tener 8 caracteres la contraseña
        alert ("Contraseña no segura");
    }else {
        alert ("registro completo" + nombre + "!");
    }

});

if (nombre === "") {
    alert ("Por favor ingresa tu nombre, este campo no puede quedar vacio");
   } else if (email === "") {
    alert ("Oshe, esto no puede estar vacío");
   } else if (!email.includes ("@")){
    alert ("Correo no aceptado");
   } else if (password === ""){
    alert ("Contrasena incorrecta");
   } else if (password.length > 8) {
    alert ("Contraseña no segura");
   }else {
    alert("Registro completo" + nombre + "!");
   };
//Solo es ver la documentación para que entender la relación js con html