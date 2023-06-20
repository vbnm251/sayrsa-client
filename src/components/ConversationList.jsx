import React, { useState } from 'react';
import ChatCard from './UI/ChatCard/ChatCard';
import Search from './UI/SearchInput/SearchInput';
import { useConversations } from '../hooks/useConversations';
import './../styles/list.css'
import Convbar from './Convbar';

const ConversationList = ({conv}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const conversations = useConversations(conv, searchQuery);

    return ( 
        <div className='list'>
            <Convbar/>

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