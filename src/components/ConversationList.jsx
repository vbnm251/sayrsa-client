import React from 'react';
import ChatCard from './ChatCard';

const ConversationList = ({conversations}) => {


    return ( 
        <div>
            { conversations.length === 0
                ? <h1>Беседы не найдены</h1>
                : 
                <div>
                    <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Беседы</h1>
                    <div style={{display : 'inline-block', overflowY : 'scroll', height: '880px'}}>
                        {conversations.map(conv =>
                            <ChatCard conversation={conv} key={conv.conv_id}/>
                        )}
                    </div>
                </div>
            }
        </div>
     );
}
 
export default ConversationList;