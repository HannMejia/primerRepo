//Usando React
//React: biblioteca/libreria de JavaScript que se utiliza para construir interfaces de usuario.
//Caracteristicas principales
//Se basa en componentes: los componentes en React son bloques de cosntrucción reutilizables que representan partes de la interfaz de usuario.
//JSX (JavaScript XML): es una extensión de sintaxis para JS que permite escribir código HTML dentro del código JS
//Virtual DOM: React utiliza un Virtual DOM, que es una representación ligera del DOM real. Cuando se realiza un cambio en la UI, React actualiza el Virtual DOM y luego compara esta versión con el DOM real para aplicar solo los cambios necesarios, mejorando el rendimiento.
//Flujo de datos unidireccional: React promueve un flujo de datos unidireccional, lo que significa que los datos fluyen de arriba hacia abajo (de los componentes padre a los componentes hijo). Esto hace que el seguimiento del estado y la gestión de la UI sean más predecibles y fáciles de depurar.
//Hooks: Con la introducción de los hooks, React permite utilizar estado y otras características de React en componentes funcionales. Los hooks como useState y useEffect simplifican la lógica del componente y facilitan la reutilización de código.
//Hooks: funciones que permiten usar el estado y otras características de React en componentes funcionales, sin necesidad de escribir clases. Introducidos en la versión 16.8, los hooks simplifican muchos aspectos del desarrollo con React y permiten compartir lógica de estado entre componentes.
//Hooks en React y los Más Utilizados
//Los hooks permiten usar estado y otras características de React en componentes funcionales. Los más utilizados son:
//useState: Para manejar el estado.
const [contador, setContador] = useState(0);
//useEffect: Para manejar efectos secundarios como llamadas a API.
useEffect(() => {
    console.log('Componente montado');
}, []);
//useContext: Para acceder a contextos.
const tema = useContext(TemaContexto);
//useReducer: Para manejar lógica de estado más compleja.
const [estado, dispatch] = useReducer(reducer, { contador: 0 });
//useRef: Para crear referencias a elementos del DOM.
const inputEl = useRef(null);

//Props en React y Tipos de Datos que Pueden Recibir
//Props son argumentos que se pasan a los componentes para comunicar datos y funciones.
//Tipos de Datos que Pueden Recibir:
//Cadenas de texto (strings)
//Números (numbers)
//Booleanos (booleans)
//Arreglos (arrays)
//Objetos (objects)
//Funciones (functions)

//Ventajas de usar React
//Desarrollo Modular: Los componentes permiten desarrollar y mantener módulos de UI de manera aislada y reutilizable.
//Actualización Eficiente del DOM: El Virtual DOM mejora el rendimiento al minimizar las actualizaciones del DOM real.
//Comunidad y Ecosistema: React tiene una gran comunidad y una amplia gama de bibliotecas y herramientas, como React Router para la navegación y Redux para la gestión del estado global.
//Compatibilidad con Mobile: Con React Native, puedes construir aplicaciones móviles nativas utilizando los mismos principios que React para la web.

//Ventajas de la Composición en React
//La composición en React permite construir interfaces complejas a partir de componentes más pequeños y simples. Algunas ventajas incluyen:
//Reutilización: Los componentes pueden ser reutilizados en diferentes partes de la aplicación.
//Mantenibilidad: Es más fácil mantener y actualizar componentes pequeños y modulares.
//Legibilidad: El código es más fácil de leer y entender cuando está dividido en componentes lógicos.

//Componentes Padres y Componentes Hijos
//Componentes Padres: Son componentes que contienen otros componentes en su interior.
//Componentes Hijos: Son componentes que están contenidos dentro de otro componente.

//useState: hook que permite añadir estado a los componentes funcionales.

import React, { useState } from 'react'; //Esto importa el hook useState de la biblioteca React.
function MiComponente() {
    const [contador, setContador] = useState(0); //Aquí declaramos una variable de estado llamada contador y una función setContador para actualizar su valor. El 0 pasado a useState es el valor inicial del estado.
    //Esta línea (<p>) muestra el valor actual de contador.
    //Cuando se hace clic en el botón, se llama a setContador con el nuevo valor del contador, lo que provoca que el componente se vuelva a renderizar con el estado actualizado.
    return ( 
    <div> 
        <p>Has hecho clic {contador} veces</p> 
        <button onClick={() => setContador(contador + 1)}> Hacer clic 
        </button> 
    </div> 
    ); 
}

