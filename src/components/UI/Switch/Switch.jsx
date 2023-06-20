import React from 'react';
import cl from './Switch.module.css';

const Switch = (props) => {
    return ( 
        <label className={cl.switch}>
            <input type="checkbox" {...props}/>
            <span className={cl.slider}></span>
        </label>
     );
}

export default Switch;