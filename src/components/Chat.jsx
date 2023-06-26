import React from 'react';
import Message from './UI/Message/Message';
import './../styles/chat.css'
import MessageInput from './MessageInput';
import Chatbar from './Chatbar';
import { observer } from 'mobx-react-lite';
import { useStores } from '../hooks/useStores';
import UserInfo from './UserInfo';

const Chat = observer(() => {
    const { chat } = useStores();

    console.log(chat.infoOpened);

    return ( 
        <div className='chat__wrapper'>
            <div className='chat'>
                <Chatbar openInfo={() => chat.openInfo()} title={chat.title}/>
                
                <div className='messages_container'>
                    {chat.messages.map(message =>
                        <Message message={message}/>
                    )}
                </div>
                        
                <MessageInput/> 
            </div>

            {chat.infoOpened &&
                <UserInfo closeInfo={() => chat.closeInfo()}/>
            }
        </div>
     );
})
 
export default Chat;