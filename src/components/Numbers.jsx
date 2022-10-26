import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
//refactoriazon de codigo
//convertir una iteracion en un array de botones
const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button key = {number.toString()}
            text = {number.toString()} 
            clickHandler={onClickNumber}
        />)
    return numbers.map(renderButton)
}
//objeto el cual desectruturamos y tomamos las propiedades internas
const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }   
    </section>
)

//las llaves van porque se usa destructuring sobre las props q le llegan al componente

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers