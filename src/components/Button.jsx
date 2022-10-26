import React from "react";
import PropTypes from "prop-types";
// la arrow function siempre tiene el nombre del componente
const Button = ({ type, text, clickHandler }) => (
        <Button className = {type} onClick = {() => clickHandler(text)}>
            <span>{text}</span>
        </Button>
)

Button.propTypes = {
    type: PropTypes.string,
    text : PropTypes.string.isRequired,
    clickHandler : PropTypes.func.isRequired
}

export default Button;


 