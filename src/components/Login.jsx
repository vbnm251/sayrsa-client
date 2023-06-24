import React from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import { observer } from 'mobx-react-lite';
import { useStores } from '../hooks/useStores';

const Login = observer((props) => {

    const { login } = useStores()

    return ( 
        <div>
            { login.isLoading 
            ?
            <h1 className='center-element-horizontal__container'>Loading...</h1>
            :
            <div>
                <Input
                    value = {login.username}
                    onChange = {(e) => login.setUsername(e.target.value)}
                    placeholder= "Username"
                    type = "text"
                />
                <Input
                    value = {login.password}
                    onChange = {(e) => login.setPassword(e.target.value)}
                    placeholder = "Password"
                    type = "password"
                />
                { login.error !== '' &&
                    <span className='error-text center-element-horizontal__container'>{login.error}</span>
                }
                <div className='center-element-horizontal__container' style={{marginTop: '10px'}}>
                    <Button onClick={login.makeLogin}>Login</Button>
                </div>
            </div>
            }
            
        </div>
     );
});
 
export default Login;