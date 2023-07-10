import {  makeAutoObservable, runInAction } from "mobx"
import AuthService from "../api/AuthService";
import { informationService } from "../api/InformationService";
import { rsaModlue } from "../utils/rsa";

class RegisterStore {
    username = '';
    password = '';
    bio = '';
    error = '';
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setUsername = (username) => {
        this.username = username
    }

    setPassword = (password) => {
        this.password = password
    }

    setBio = (bio) => {
        this.bio = bio
    }

    makeRegistration = async () => {
        runInAction(() => this.error='')
        try {
            runInAction(() => {this.isLoading = true})

            rsaModlue.generate();

            const responce = await AuthService.register(
                this.username, this.password, this.bio, rsaModlue.getPublicKey(), rsaModlue.getPrivateKey()
            )

            console.log(responce.data.token);

            informationService.updateToken(responce.data.token) 
            sessionStorage.setItem('username', this.username)
            
        } catch(e) {
            runInAction(() => {this.error = e.message})
        } finally {
            runInAction(() => {this.isLoading = false})
        }
    }
}

export default RegisterStore