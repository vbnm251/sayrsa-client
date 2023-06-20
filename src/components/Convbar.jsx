import React from 'react';
import '../styles/list.css';
import settings from '../assets/settings.svg';

const Convbar = () => {
    return ( 
        <div className='convbar'>
            <h1>Conversations</h1>
            <img 
                src={settings} 
                alt=''
                onClick={() => console.log('settings clicked')}>         
            </img>
        </div>
     );
}
 
export default Convbar;