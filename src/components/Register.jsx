import React, { useMemo } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import { rsaModlue } from '../utils/rsa';
import { useStores } from '../hooks/useStores';
import { observer } from 'mobx-react-lite';

const Register  = observer(({makeAuth}) => {
    const { register } = useStores()

    async function passAuth() {
        await register.makeRegistration(rsaModlue.getPublicKey(), rsaModlue.getPrivateKey())
        if (register.error === '') {
            makeAuth()
        }
    }

    return ( 
        <div>
            <Input
                value = {register.username}
                onChange = {e => register.setUsername(e.target.value)}
                placeholder= "Username"
                type = "text"
            />
            <Input
                value = {register.password}
                onChange = {e => register.setPassword(e.target.value)}
                placeholder = "Password"
                type = "password"
            />
            <Input
                value = {register.bio}
                onChange = {e => register.setBio(e.target.value)}
                placeholder = "Bio"
                type = "text"
            />
            <div className='center-element-horizontal__container' style={{marginTop: '10px'}}>
                <Button onClick={passAuth}>Register</Button>
            </div>
        </div>
     );
})
 
export default Register;