/*
POO
Clases : Se refiere a nuestro molde o plantilla para que podamos crear objetos; utiliza la palabra reservada class
Constructor : Es una función obligatoria para crear objetos (chefsitx) a traves de caracteristicas  o atributos especiicas
Objetos : Es lo que construimos a traves de la clase y el constructor 
Atributo : Se refieren a las caracteristicas o propiedades de mi objeto 
Metodo : Lo que hace nuestro objeto (saludar, brincar, correr)
Instanciacion : Se refiere a cuando ya creamos la calse, el constructor y el objeto 
Herencia :Cuenta la palabar reservada extends. La herencia permite reutilizar el código de la clase padre en la clase hijo
Polimorfismo : El comportamniento de cada objeto de la misma clase a un metodo 
Encapsulamiento : Se refiere a encerrar y/o ocultar el código 
Abstracción : Se refieres a ser muy especificxs con los objetos (resumir)
Modularidad : Nos perimte reutilizar código, hacer modificaciones, tener orde, entender y mantener el código 
Metodos estaticos : Utiliza la palabra reservada static, nos permite ejecutar una clase sin instanciar al objeto 
Metodos accesores : (Pendiente)

Principios SOLID
-- Principio de responsabilidad única (SRP) --: se refiere a que cada que asignamos una clase, objeto, etc., debe ser única
-- Principio de abierto y cerrado (OCP) --: se refiere a que debemos poder extender el código  ya existente de ser necesario
-- Principio de sustitución de Liskov --: se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo.
-- Principio de segregación de interfaces (ISP) --: se refiere a distintas interfaces 
-- Principio de investigación de dependencias (DIP) --: trabaja a traves de la abstraccion para que el código no dependa de detalles específicos.

Objetos JSON
JavaScript Object Notation
Se manejan a traves de clave-valor y no tienen métodos
*/

class ch47 {//Clase principal o clase padre
    constructor (nombre, apellido, correo, edad){//Nos permite crear el objeto
        this.name = nombre; //this nos permite seleccionar el objeto que voy a crear
        this.lastName = apellido;
        this.email = correo;
        this.age = edad;
        this.info = `Hola, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}` //para extraer información; para concatenar objetos se utiliza los acentos al reves y la estructura ${}
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}

class instruccion extends ch47 {
    constructor (nombre, apellido, correo, edad, escolaridad){
        super (nombre, apellido, correo, edad)
        this.grade = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy no tienes sesión");
    }

    infoIntegrantes(){
        super.infoIntegrantes();
    }

}

class mentoria extends ch47 {
    constructor (nombre, apellido, correo, edad, telefono){
        super (nombre, apellido, correo, edad)
        this.tel = telefono;
    }

    static darMentoria () {
        console.log ("Tienes muchos mentees");
    }
}

class mentee extends ch47 {
    constructor (nombre, apellido, correo, edad, labor){
        super (nombre, apellido, correo, edad)
        this.job = labor;
    }
    static estaLabor () {
        console.log ("Estoy trabajando");
    }
}

const inte1 = new ch47 ("Hannia", "Mejia", "margaritta0676@gmail.com", 22); //Los objetos se deben definir con constantes (const)
const inte2 = new instruccion ("Liliana", "Aguirre", "lili@gmail.com", 30, "Licenciatura");
const inte3 = new mentee ("Abigail", "Sanchez", "abigail@gmail.com", 25, "Tengo trabajo");
inte1.infoIntegrantes();
inte2.infoIntegrantes();
inte3.infoIntegrantes();
instruccion.darSesiones();
mentoria.darMentoria();
mentee.estaLabor();