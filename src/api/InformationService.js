import axios from "axios"
import { server } from "..";

class InformationService {
    token = ''

    updateToken = (token) => {
        this.token = token
    }

    getToken() {
        return this.token;
    }

    async getConversations(){
        const responce = await axios.get(`${server}/api/conv`, {
            headers : {
                'Authorization' : `Bearer ${this.token}`, 
                'Content-Type' : 'application/json',
            }
        })
        return responce
    }

    async getMessages(convId, offset, amount = 50) {
        const responce = await axios.get(`${server}/api/msg/${convId}`, {
            params : {
                'offset' : offset,
                'amount' : amount
            }, 
            headers : {
                'Authorization' : `Bearer ${this.token}`, 
                'Content-Type' : 'application/json',
            }
        })

        return responce
    }

    
}

export const informationService = new InformationService()

