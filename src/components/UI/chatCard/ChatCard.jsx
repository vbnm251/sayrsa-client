import React from 'react';
import cl from './ChatCard.module.css'

const ChatCard = () => {
    return ( 
        <div className={cl.chat_card}>
            <div className={cl.avatar}></div>
            <div className={cl.text_area}>
                <h3>Имя</h3>
                <span>Сообщение</span>
            </div>
            <div className={cl.message_status}>
                <span>13:02 AM</span>
                <div className={cl.unread_messages}>3</div>
            </div>
        </div>
     );
}
 
export default ChatCard;