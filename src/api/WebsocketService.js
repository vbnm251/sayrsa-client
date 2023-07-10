import { informationService } from "./InformationService";

class WebsocketManager {

    ws = null
    chat = null
    conv = null
    
    connect(chat, conv) {
        this.ws = new WebSocket(`ws://localhost:8081/ws/`, ["access_token", `${informationService.getToken()}`])

        this.chat = chat
        this.conv = conv

        this.ws.onopen = (e) => {
            console.log('connected');
        }

        this.ws.onerror = (e) => {
            console.log(e);
        }

        this.ws.onmessage = (e) => {
            this.messageHandler(JSON.parse(e.data));
        }

        this.ws.onclose = (e) => {
            console.log(e);
        }
    }

    messageHandler(data) {
        console.log(data);
        switch (data.event) {
            case 'new_conv' :
                this.conv.addConversation(data.data)
                break
            case 'new_message':
                break
            default:
        }
    }

    sendMessage(data) {
        this.ws.send(data)
    }
}

export const wsManager = new WebsocketManager()