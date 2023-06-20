import React from 'react';
import info from '../assets/info.svg';
import '../styles/chat.css';

const Chatbar = ({openInfo}) => {
    return ( 
        <div className='chatbar'>
            <h2>John</h2>
            <img 
                src={info}
                alt=''
                onClick={openInfo}
            />
        </div>
     );
}
 
export default Chatbar;
