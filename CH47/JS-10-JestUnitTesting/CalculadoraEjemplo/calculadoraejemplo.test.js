//const {beforeEach} = require('jest-circus')
const calculate = require('./index');

//Lo que deberia suceder en el proceso de prueba es:
//1. El ususario coloca la informacion, en este caso, llena los campos
//2. Selecciona lo que busca es una suma, resta o multiplicación
//3. En el html se renderiza el resultado

describe("operation = suma", ()=>{
    let number1, number2, resultElement;

        beforeEach(()=>{
            //simular el DOM
            document.body.innerHTML = `<input id="number1" value="2"/> <input id = "number2" value="2"/>
            <div id="result"></div>`

            number1 = document.getElementById("number1").value;
            number2 = document.getElementById("number2").value;
            resultElement = document.getElementById("result");
        })

    test("values 2,2 & expected 4", ()=> {
        
        calculate("add");
        expect(resultElement.innerText).toBe("Resultado: 4")
    })
})

