import React from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import '../styles/chat.css'

const MessageInput = () => {
    
    const sendMessage = (e) => {
        e.preventDefault();
    }

    const height = '50px';

    return (  
        <div className='input__messages'>
            <form >
                <Input
                    placeholder = "Enter your message"
                    style= {{width: '600px', height: height}}
                />
                <Button
                    style = {{height : height}}
                    onClick = {sendMessage}
                >Send</Button>
            </form>
        </div>
    );
}
 
export default MessageInput;