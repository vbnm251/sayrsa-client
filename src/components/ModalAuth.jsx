import React, { useState } from 'react';
import '../styles/modal.css';
import '../styles/app.css'
import Switch from './UI/Switch/Switch';
import Login from './Login';
import Register from './Register';

const ModalAuth = ({passAuth}) => {

    const [loginscreen, setLoginscreen] = useState(false);

    function makeAuth() {
        passAuth(true)
    }

    return ( 
        <div className='modal modal__active'>
            <div className='modal__content' style={{width: '500px'}}>

                <div className='center-element-horizontal__container' style={{margin: '10px 0', display: 'flex'}}>
                    <span>Register</span>
                    <Switch onChange={e => setLoginscreen(e.target.checked)}/>
                    <span>Login</span>
                </div>
                
                {loginscreen
                    ?
                    <Login makeAuth={makeAuth}/>
                    :
                    <Register makeAuth={makeAuth}/>
                }
                
            </div>
        </div>
     );
}
 
export default ModalAuth;