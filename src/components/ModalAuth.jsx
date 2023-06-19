import React from 'react';
import '../styles/modal.css';
import '../styles/app.css'
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const ModalAuth = ({setAuthed}) => {

    function login() {
        setAuthed(true)
    }

    return ( 
        <div className='modal modal__active'>
            <div className='modal__content'>
                <Input
                    placeholder= "Username"
                    type = "text"
                />
                <Input
                    placeholder = "Password"
                    type = "password"
                />
                <div className='center-element__container' style={{marginTop: '10px'}}>
                    <Button onClick={login}>Login</Button>
                </div>
            </div>
        </div>
     );
}
 
export default ModalAuth;