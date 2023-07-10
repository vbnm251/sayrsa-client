import { action, makeObservable, observable, runInAction } from "mobx";
import { informationService } from "../api/InformationService";

class ChatStore {
    messages = [];
    isLoading = false;
    infoOpened = false;
    
    title = '';
    members = [];
    messagesAmount = 0;

    constructor() {
        makeObservable(this, {
            messages : observable,
            isLoading : observable,
            infoOpened : observable,
            openInfo : action,
            closeInfo : action,
            openConversation : action,
        })
    }

    openInfo() {
        this.infoOpened = true;
    }

    closeInfo() {
        this.infoOpened = false;
    }

    updateAmount() {
        this.messagesAmount+=1;
    }

    async sendMessage(messageText) {
        // for user in members : 
        //    encrypt message and add it to data
        // send data to ws
    }

    /* TODO : add observer */

    async openConversation(conversation) {
        try {
            runInAction(() => this.isLoading = true)
            const resp = await informationService.getMessages(conversation.conv_id, conversation.lastMessage.id)
            runInAction(() => {
                this.messages = resp.data.messages
                this.title = conversation.title;
                this.members = conversation.members;
                this.messagesAmount = conversation.lastMessage.id;
            })
        } catch(e) {
            runInAction(() => this.error = e.message)
        } finally {
            runInAction(() => this.isLoading = false)
        } 
    }

    /* 
    send message -> encrypt for each member and send in websocket
    get message -> decrypt using PrivateKey
    get messages
    */
}

export default ChatStore