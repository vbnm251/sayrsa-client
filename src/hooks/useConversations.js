import { useMemo } from 'react';

export const useConversations = (conversations, searchQuery) => {
    const searchedConversations = useMemo(()=> {
        return conversations.filter(conv => conv.title.toLowerCase().includes(searchQuery));
    }, [searchQuery, conversations])

    return searchedConversations;
}