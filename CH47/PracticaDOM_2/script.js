//*** DOM (Document Object Model): interfaz de programación para los documentos HTML y XML. Proporciona una representación estructurada del documento y define una forma en que los programas pueden acceder, manipular y modificar su estructura, estilo y contenido.

//Caracteristicas
//Representación en árbol: El DOM representa el documento como una estructura en árbol donde cada nodo del árbol corresponde a una parte del documento (como un elemento HTML, un atributo, o un texto).
//Interactividad: Permite a los lenguajes de programación, como JavaScript, interactuar con el documento. Puedes añadir, eliminar o modificar nodos del DOM para cambiar dinámicamente la apariencia y el contenido de la página web.
//Accesibilidad: Cada nodo en el DOM puede ser accesible a través de métodos de scripting, permitiendo navegar y manipular la estructura del documento de manera precisa.
//Interacción con el DOM usando JS
//Acceder a elementos del DOM: 
//getElementById: Devuelve un elemento con un ID específico.
//getElementsByClassName: Devuelve una lista de elementos con una clase específica.
//Modificar el contenido:
//innerHTML: Cambia el contenido HTML de un elemento.
//textContent: Cambia el contenido de texto de un elemento.
//Agregar y eliminar elementos:
//appendChild: Añade un nuevo nodo como hijo de un elemento existente.
//removeChild: Elimina un nodo hijo de un elemento.

//Cuando buscamos modificar el valor de un input html, generalmente utilizamos la
//const inputOne = document.getElementById("inputText").value;
//La estructura de como interactuamos con el DOM en JS es la siguiente:
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