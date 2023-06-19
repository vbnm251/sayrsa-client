import React from 'react';
import cl from './Message.module.css'
import { parseDate } from '../../../utils/date';

const Message = ({message, self}) => {
    const sendDate = parseDate(message.sendDate);

    if (self) {
        return ( 
            <div className={[cl.message_line, cl.self].join(' ')}>
                <div className={cl.container}>
                    <div className={cl.sender}>{message.sender}</div>
                    <div className={[cl.message, cl.self_message].join(' ')}>
                        {message.text}
                    </div> 
                    <div className={cl.send_time}>{sendDate}</div>
                </div>
            </div>
        );
    }

    return ( 
        <div className={[cl.message_line, cl.not_self].join(' ')}>
            <div className={cl.container}>
                <div className={cl.sender}>{message.sender}</div>
                <div className={[cl.message, cl.not_self_message].join(' ')}>
                    {message.text}
                </div> 
                <div className={cl.send_time}>{sendDate}</div>
            </div>
        </div>
    );
}
 
export default Message;