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

}
