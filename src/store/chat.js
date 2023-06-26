import { makeAutoObservable } from "mobx";

class ChatStore {
    title = '';
    messages = [];
    isLoading = false;
    infoOpened = false;
    members = [];
    messagesAmount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    openInfo() {
        this.infoOpened = true;
    }

    closeInfo() {
        this.infoOpened = false;
    }

    openConversation(conversation) {
        this.title = conversation.title;
        this.members = conversation.members;
        this.messagesAmount = conversation.lastMessage.id;
        //call for messages
    }

    /* 
    send message -> encrypt for each member and send in websocket
    get message -> decrypt using PrivateKey
    get messages
    */
}

export default ChatStore