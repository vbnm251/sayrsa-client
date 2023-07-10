import { makeAutoObservable, runInAction } from "mobx"
import { informationService } from "../api/InformationService";

class ConversationStore {
    conversations = [];
    searchQuery = '';
    isLoading = false;
    error = ''

    constructor() {
        makeAutoObservable(this);
    }

    setSearchQuery(value) {
        this.searchQuery = value;
    }

    addConversation(conversation) {
        this.conversations.push(conversation)
        console.log(this.conversations);
    }

    get searchedConversations() {
        return this.conversations.filter(conv => conv.title.toLowerCase().includes(this.searchQuery));
    }

    async setConversations() {
        try {
            runInAction(() => this.isLoading = true)
            const resp = await informationService.getConversations()
            runInAction(() => this.conversations = resp.data.conversations)
        } catch(e) {
            runInAction(() => this.error = e.message)
        } finally {
            runInAction(() => this.isLoading = false)
        }
    }

    /* 
    addConversation -> update conversations and send in ws
    */
}

export default ConversationStore