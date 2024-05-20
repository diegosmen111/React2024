// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function BotonDinamico({text , clase, id, disabled, handleClick}){

 return(
    <div><button
        onClick={handleClick}
        id={id}
        className={clase}
        disabled={disabled}
    >
        {text}
    </button>
    </div>
 ) 
}