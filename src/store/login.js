import { makeAutoObservable } from "mobx"
import AuthService from "../api/AuthService"
import { rsaModlue } from "../utils/rsa";
import { informationService } from "../api/InformationService";

class LoginStore {
    username = '';
    password = '';
    error = '';
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    setUsername = (username) => {
        this.username = username
    }

    setPassword = (password) => {
        this.password = password
    }

    setIsLoading = (flag) => {
        this.isLoading = flag
    }

    setError = (error) => {
        this.error = error
    }

    makeLogin = async () => {
        this.setError('')
        try{
            this.setIsLoading(true);
            const responce = await AuthService.login(this.username, this.password);
            const data = responce.data;
            rsaModlue.setPrivateKey(data.privateKey)
            informationService.updateToken(data.token)
        } catch(e) {
            this.setError(e.message);
        } finally {
            this.setIsLoading(false);
        }
    }
        
}

export default LoginStore