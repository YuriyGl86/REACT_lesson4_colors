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

    const initialState = {
        hex:'#00ffff',
        rgb: '0 255 255'
    }
    const [color, setColor] = useState(initialState)
    
    const containerRef = useRef()

    const handleChange = ({ target }) => {
        setColor(prev => {
            let newState = {...prev, [target.name]: target.value}
            if(target.value.length < 7) return newState
            const rgb = hexToRgb(target.value)
            if(rgb){
                newState = {...newState, 'rgb': `${rgb.r} ${rgb.g} ${rgb.b}`}
                containerRef.current.style.background = target.value
            } else {
                newState = {...newState, 'rgb': `Ошибка!`}
            }
            return newState
        })
        
    }

    return (
        <div className={classes.container} ref ={ containerRef }>
            <form>
                <input
                name='hex' 
                className={classes.input} 
                type="text"
                value = {color.hex}
                onChange = {handleChange} 
                />
            </form>
            <div className={classes.rgb}>{color.rgb}</div>
        </div>
    )
}
