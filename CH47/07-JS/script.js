/*Tipos de datos y variables
Variables: es un espacio de memoria de nuestro programa
Tres formas de declarar variables: var, let y const
var: alcance global (casi en desuso porque presenta varios errores por las nuevas actualizaciones, evitar utilizarlo)
let: alcance local
const: constante
**scope: alcance de mis variables

string: cadena de texto
number: número
boolean: solo puede tener dos posibles valores > true (verdadero) o false (falso)
undefined: no definido
null: no tiene valor
nan: no es un número
*/

//let nombre: declaro mi variable
//nombre: "Hannia"; inicializo mi variable
//let nombre = "Hannia";
//nombre = "Luisa";

//console.log(nombre);

/*const apellido
apellido = "Mejia"
console.log(apellido); >>>>> Esto es incorrecto*/

/*const apellido = "Mejia";
console.log(apellido);
apellido = "Rendon";
console.log(apellido);*/

/*Con let la variable puede cambiar de valor; con const, no */

/*let nombre = "Hannia"
const apellido = "Mejia"
let edad = 22;
let ine = true;
let telefono = null;
let cp = "56356";
let direccion;*/

//Múltiple variables
//let num1; let num2; let num3;
//num1 = 5
//num2 = 10
//num3 = 16
//o
/*let num1 = 56;
let num2 = 66;
let num3 = 76; //>>> Esta es la forma recomendada*/

//let precio = prompt ("¿Cuál es tu rango de inversión?");
//console.log(typeof precio);

//Objeto number
//let numero1 = "67";
//let newnum = Number(numero1);
//comsole.log(typeof newnum);

//conversion de tipo de dato string a number
/*let cp = "56356";
let numcp = parseInt(cp);
console.log(typeof numcp);

let cp = "56356";
let numcp = parseFloat(cp);
console.log(typeof numcp);*/

//Conversión de un número a string
/*let edad = 22;
let edadString = edad.toString();
console.log(edadString);*/

//Conversión de un valor booleano a string 
/*let respuesta = true;
let respClara = respuesta.toString();
console.log(typeof respClara);*/

//Cómo se usa Nan
let nombre = "Hannia";
let edad = 22;

console.log(nombre + edad);
console.log(nombre * edad);
