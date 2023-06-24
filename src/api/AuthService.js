import axios from "axios";

export default class AuthService {
    static async login(username, password) {
        const responce = await axios.post("http://localhost:8080/auth/sign-in", {
            username : username,
            password : password,
        }, {
            headers : {
                'Content-Type': '"application/json',
            }
        })

        return responce
    }

    static async register(username, password, bio, publicKey, privateKey) {
        const responce = await axios.post("http://localhost:8080/auth/sign-up", {
            username : username,
            password : password,
            bio : bio,
            publicKey : publicKey,
            privateKey : privateKey
        }, {
            headers : {
                'Content-Type': '"application/json',
            }
        })

        return responce
    }

}
