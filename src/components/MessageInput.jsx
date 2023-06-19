import React from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

const MessageInput = () => {
    
    const sendMessage = (e) => {
        e.preventDefault();
    }

    const height = '50px';

    return (  
        <form>
            <Input
                placeholder = "Enter your message"
                style= {{width: '600px', height: height}}
            />
            <Button
                style = {{height : height}}
                onClick = {sendMessage}
            >Send</Button>
        </form>
    );
}
 
export default MessageInput;