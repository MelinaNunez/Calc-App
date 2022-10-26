//los componentes siempre empiezan con mayuscula y se exportan primero que el css
//la forma de saber exactamente como importar los componentes de una libreria cualquiera es revisando su document en npm o en su pagina web
//importacion

/* eslint no-eval: 0 */ //desaparece el warning de eval por en este caso no es peligroso
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css' //a diferencia de js a este si hay que ponerle la extension 

// [ ]
// Función Flecha o Arrow Function
//generacion de la funcion del componentes
const App = () => {
    // Array Destructuring 
    // 1era posicion: valor (que inicialmente es el valor por defecto)
    // 2da posicion: funcion que permite modificar el valor por defecto
    //los nombres no tienen importancia para el funcionamiento pero siempre son importantes para la claridad del codigo
    // para la funcion siempre va primero la palabra set 
    const [stack, setStack]  = useState('')

    const items = words(stack, /[^-^+^*^/]+/g)
    //hace q se vea el ultimo string ingresado y no la funcion completa
    /*
    similar a un if
    (esverdadero) ? (resultado por verdadero) : (resultado por falso)
    */ 
    const value = items.length > 0 ? items[items.length - 1] : "0" //operador ternario
    
    return (
    <main className='react-calculator'>
        <Result value = {value} /> 
        <Numbers onClickNumber = {number => { 
                //funcion que modifica los valores clickeados
                //uso de template literals y es6
                setStack(`${stack}${number}`) //logra la concanetacion los nros que vamos escribiendo(que no se borre el numero anterior)
                //viene del onClickNumber por este muestra el nro 
         }}/>
        <Functions 
            onContentClear={() => { setStack('')} }
            onDelete={() => {
                //validacion para que borre solo cuando hay algun nro
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1 )
                    setStack(newStack)
                }
                // elimina el ultimo string recibido 
            }}
        />
        <MathOperations 
            onClickOperation={operation => { 
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => { 
                setStack(eval(stack).toString())
            }}
            // eval evalua una expresión que da como resultado una cadena de texto o un valor numérico (no es recomendable usarlo)
            // el toString() siempre hace que sea un string
        />
    </main>) // cuando esta en otra linea es importante cerrarlo con parentesis
}

export default App

//unico default en el archivo
//cuando a la propiedad del componente le quiero pasar algo que no sea string, se ultiza llaves {0} y se pasa numerico. De esa manera se pasa propiedad de la app al componente result, dentro del componente se ve el resultado
// se puede poner varias propiedades a un componente