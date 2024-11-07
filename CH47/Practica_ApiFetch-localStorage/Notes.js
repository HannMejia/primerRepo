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
    console.log(response.data.name);
}).catch((error)=>{
    console.error("Ha fallado");
})
console.log("Despues del fetch");


 