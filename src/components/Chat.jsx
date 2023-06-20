import React from 'react';
import Message from './UI/Message/Message';
import './../styles/chat.css'
import MessageInput from './MessageInput';
import Chatbar from './Chatbar';

const Chat = ({openInfo}) => {
    const messages = [
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
        {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'},
    ]

    /*TODO: add unique key*/

    const mes = {sender : 'vbnm251', text : 'heii', sendDate : '2023-06-18T16:01:28.346423Z'};

    return ( 
        <div className='chat'>
            <Chatbar openInfo={openInfo}/>
            
            <div className='messages_container'>
                {messages.map(message =>
                    <Message message={message}/>
                )}
                <Message message={mes} self />
            </div>

            <div className='input__messages'>
                <MessageInput/> 
            </div>
        </div>
     );
}
 
export default Chat;