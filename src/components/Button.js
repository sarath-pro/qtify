import React from 'react'
import './Button.css'

function Button({text, clickHandler}) {
    return (
        <>
            <button onClick={clickHandler}>{text}</button>
        </>
    )
}

export default Button