// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
// Return the value of what she should be paying.

/*
const tarifaMensual = 3
const tasaInteresMensual = 0.001
let pagoMensual = prompt ("Hola, ingresa el monto mensual a pagar");
function pagoMensualFinal () {
    let pagoMensualFinal = pagoMensual + pagoMensual * tasaInteresMensual + tarifaMensual;
     console.log (pagoMensualFinal + " Nota: en el resultado se está agregando un cero de más, pero no sé por qué está pasando :(");
     return alert ("Tomando en cuenta un pago mensual de $" + pagoMensual + ", usted tiene que pagar en total $" + pagoMensualFinal);
}
pagoMensualFinal();
*/

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

/*
let name1 = prompt ("Ingresa el nombre de tu amigo número 1");
let name2 = prompt ("Ingresa el nombre de tu amigo número 2");
let name3 = prompt ("Ingresa el nombre de tu amigo número 3");

function misAmigos () {
    let misAmigos = "Bienvenidos " + name1 + ", " + name2 + ", y " + name3;
    console.log (misAmigos);
}
misAmigos ();

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30

let yourName = prompt ("Ingresa tu nombre")
let añoNacimiento = prompt ("Ingresa tu año de nacimiento");
let añoActual = prompt ("Ingresa el año actual")
function edad () {
    let edad = añoActual - añoNacimiento;
    console.log (edad);
    return alert (yourName + ", actualmente tienes " + edad + " años :)")
}
edad ();

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.


let añoNacimiento1 = prompt ("Ingresa su año de nacimiento");
let añoNacimiento2 = prompt ("Ingresa su año de nacimiento");
let añoNacimiento3 = prompt ("Ingresa su año de nacimiento");
function calculaEdad () {
    let edad1 = añoActual - añoNacimiento1;
    let edad2 = añoActual - añoNacimiento2;
    let edad3 = añoActual - añoNacimiento3;
    console.log (edad1, edad2, edad3);
    alert ("Bienvenid@, " + name1 + ", actualmente tienes " + edad1 + " años :)");
    alert ("Bienvenid@, " + name2 + ", actualmente tienes " + edad2 + " años :)");
    alert ("Bienvenid@, " + name3 + ", actualmente tienes " + edad3 + " años :)");
}
calculaEdad ();
*/

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

let calificacion = prompt ("Ingresa tu calificacion");
function aprobacion () {
    let aprobado = calificacion >= 5;
    console.log (aprobado);
    if (aprobado === true) {
        alert ("Felicidades, has aprobado :)");
        if (calificacion >= 8 && calificacion <= 10.99) {
            alert ("Felicidades, has probado con una calificación EXCELENTE :D")
        } else if (calificacion === 11) {
            alert ("Felicidades, has aprobado con la calificación PERFECTA :O")
        }
    } else {
        alert ("Lo sentimos, no has aprobado :(")
    }
}
aprobacion ();


// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.


// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

