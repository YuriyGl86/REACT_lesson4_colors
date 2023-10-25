import React, { useRef, useState } from 'react'
import classes from './color.module.css'

export  function Color() {
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    const initialState = '#00ffff'
    const [color, setColor] = useState(initialState)
    
    const rgbRef = useRef()

    const handleChange = ({ target }) => {
        console.log(target)
    }

    return (
        <div className={classes.container}>
            <form>
                <input
                name='hex' 
                className={classes.input} 
                type="text"
                value = {color}
                onСhange = {handleChange} 
                />
            </form>
            <div className={classes.rgb} ref={rgbRef}></div>
        </div>
    )
}
