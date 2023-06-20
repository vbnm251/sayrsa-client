import React from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const Register = ({register}) => {
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
            <Input
                placeholder = "Bio"
                type = "text"
            />
            <div className='center-element-horizontal__container' style={{marginTop: '10px'}}>
                <Button onClick={register}>Register</Button>
            </div>
        </div>
     );
}
 
export default Register;