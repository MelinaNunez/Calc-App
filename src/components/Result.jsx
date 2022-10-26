//importar libreria que necesitamos
import React from 'react'
import PropTypes from 'prop-types'

//enmascript usa arrow function
//construccion del componente funcional
const Result = ({ value }) => ( // se usa destructuring
// debugger  sirve para detener y poder inspeccionar el codigo
        <div className="result">
            {value} 
        </div>
)
//validaciones 
Result.propTypes = { //froma parte del componente
    value : PropTypes.string.isRequired // parte de la libreria
} //le asigno un objeto 

//valor por defecto cuando no se pone lo que se espera
Result.defaultProps = {
    value : '0'
}

//para hacer un div con una clase mas corto puedo usar div.result
export default Result
//para mostrar algo de js dentro de un componente se pone entre llaves {}