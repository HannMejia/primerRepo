document.getElementById("registro").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre input").value.trim(); 
    const email = document.querySelector("#correo input").value.trim();
    const ciudad = document.querySelector("#ciudad input").value.trim();
    const password = document.querySelector("#contraseña input").value.trim();

    if (nombre === "") {
        alert("Ingresa tu nombre");
    } else if (email === "") {
        alert("Ingresa un correo");
    } else if (!email.includes ("@")){ 
        alert("Correo no válido");
    } else if (ciudad === "") {
        alert ("Ingresa tu ciudad");
    } else if (password === ""){
        alert ("La contraseña debe contener al menos 8 caracteres")
    } else if (password.length < 8){ 
        alert ("No seguro. La contraseña debe contener al menos 8 caracteres");
    } else {
        alert ("¡Haz completado tu registro," + nombre + "!");
    }
});