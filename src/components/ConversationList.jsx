import React, { useEffect } from 'react';
import ChatCard from './UI/ChatCard/ChatCard';
import Search from './UI/SearchInput/SearchInput';
import { useConversations } from '../hooks/useConversations';
import './../styles/list.css'
import Convbar from './Convbar';
import { observer } from 'mobx-react-lite';
import { useStores } from '../hooks/useStores';

const ConversationList = observer(() => {

    const { conv } = useStores()

    const conversations = useConversations(conv.conversations, conv.searchQuery)

    useEffect(() => {
        conv.setConversations()
        console.log('fetched conversations')
    }, [])

    return ( 
        <div className='list'>
            <Convbar/>

            <Search
                value = {conv.searchQuery}
                onChange = {e => conv.setSearchQuery(e.target.value)}
                placeholder = "Search"
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
})
 
export default ConversationList;