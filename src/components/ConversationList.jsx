import React, { useState } from 'react';
import ChatCard from './UI/ChatCard/ChatCard';
import Search from './UI/SearchInput/SearchInput';
import { useConversations } from '../hooks/useConversations';
import settings from './../assets/settings.svg';
import './../styles/list.css'

const ConversationList = ({conv}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const conversations = useConversations(conv, searchQuery);

    return ( 
        <div className='list'>
            <div className='appbar'>
                <h1>Conversations</h1>
                <img 
                    src={settings} 
                    alt='dfjglkhdj'
                    onClick={() => console.log('clicked')}>         
                </img>
            </div>
            <Search
                value = {searchQuery}
                onChange = {e => setSearchQuery(e.target.value)}
                placeholder = {"Search"}
                type = "text"
            />
            <div className='conv_list'>
                {conversations.length === 0
                    ?
                    <h1 className='no_conv'>
                        No conversations
                    </h1>
                    : 
                    <div>
                        {conversations.map(conv =>
                            <ChatCard conversation={conv} key={conv.conv_id}/>
                        )}
                    </div>
                }
            </div>
        </div>
     );
}
 
export default ConversationList;