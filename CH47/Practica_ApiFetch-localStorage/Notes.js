//Ejemplo de una función síncrona
/*function procesoSincrono(){
    console.log("inicia el proceso sincrono");
    for(let i=0; i< 1e9 ; i++){}
    console.log("fin del proceso sincrono");
}
console.log("Este punto es antes de la función");
procesoSincrono();
console.log("despues de la función sincrona");*/

//Ejemplo de una función asíncrona 
/*const failed = false;

const myPromise = new Promise((resolve, reject) => { 
    if(failed)
        reject('fail promise');
    else
        resolve('resolved!!')
});

function success(result){
  console.log(result);
}

function onFailed(error){
  console.log(error);
}

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));*/

/*function procesoAsincrono(){
    console.log("Inicia el proceso asincrono");
    setTimeout(()=>{
        console.log("aqui termina el proceso asincrono");
    },15000);
}
console.log("antes de la funcion asincrona");
procesoAsincrono();
console.log("despues de la funcion asincrona");*/

//{} -> objeto

const url = "https://pokeapi.co/api/v2/pokemon/charmander";

console.log("antes del fetch");
fetch (url,{
    method: 'GET'
}).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    localStorage.setItem("nombrePokemon", data.name);
}).catch((error)=>{
    console.error(error, "Ha fallado");
})
console.log("Despues del fetch");

function peleaPokemon() {
    const miPrimerPokemon = localStorage.getItem("nombrePokemon");
    console.log("primerContrincante: " + miPrimerPokemon);
}
peleaPokemon();

//ASYNC/AWAIT
//Funciones dummys o mobs = funciones de prueba
function dummyFetch() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("datosDummys");
        }, 10000)
    })
}
//desde el uso de la palabra reservada -- async --, estas declarando que la función es asincrona y, por tanto, retorna una promesa.
async function funcionAsync() {
    try { //Uso de try - catch para manejo de errores
        const data = await dummyFetch(); //Aquí esperamos a que la promesa se resuelva.
        console.log(data);
    } catch(err) {
        console.error ("Error de Dummy" + err);
    }
}
funcionAsync();