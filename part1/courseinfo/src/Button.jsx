import { useState } from 'react'
import App from "./App.jsx";

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button