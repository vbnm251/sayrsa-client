import { makeAutoObservable, runInAction } from "mobx"
import AuthService from "../api/AuthService"

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
        try{
            this.setIsLoading(true);
            const responce = await AuthService.login(this.username, this.password);
            console.log(responce);
        } catch(e) {
            this.setError(e.message);
        } finally {
            this.setIsLoading(false);
        }
    }
}

export default new LoginStore()