import React from 'react';
import cl from './ChatCard.module.css'
import moment from 'moment';
import { parseDate } from '../../../utils/date';
//import { useStores } from '../../../hooks/useStores';

const ChatCard = ({conversation, onclick, ...props}) => {
    //const { chat } = useStores();

    let lastMessageText = '* no messages *';
    let sendTime = moment().format('HH:mm').toString();

    if (typeof conversation.lastMessage !== 'undefined'){
        lastMessageText = conversation.lastMessage.text;
        sendTime = parseDate(conversation.lastMessage.sendDate);
    }

    const unreadMessages = 0;

    return ( 
        <div className={cl.chat_card} onClick={onclick}>
            <div className={cl.avatar}></div>
            <div className={cl.text_area}>
                <h3>{conversation.title}</h3>
                <span>{lastMessageText}</span>
            </div>
            <div className={cl.message_status}>
                <span>{sendTime}</span>
                {unreadMessages === 0
                    ? <div></div>
                    : <div className={cl.unread_messages}>3</div>
                }
                
            </div>
        </div>
     );
}
 
export default ChatCard;