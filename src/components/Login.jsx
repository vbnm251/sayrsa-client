import React from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const Login = ({login}) => {
    return ( 
        <div>
            <Input
                placeholder= "Username"
                type = "text"
            />
            <Input
                placeholder = "Password"
                type = "password"
            />
            <div className='center-element-horizontal__container' style={{marginTop: '10px'}}>
                <Button onClick={login}>Login</Button>
            </div>
        </div>
     );
}
 
export default Login;