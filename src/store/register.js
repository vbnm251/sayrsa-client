import {  makeAutoObservable, runInAction } from "mobx"
import AuthService from "../api/AuthService";
import { informationService } from "../api/InformationService";

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

    makeRegistration = async (publicKey, privateKey) => {
        try {
            runInAction(() => {this.isLoading = true})
            const responce = await AuthService.register(
                this.username, this.password, this.bio, publicKey, privateKey
            )
            informationService.updateToken(responce.data.token) 
        } catch(e) {
            runInAction(() => {this.error = e.message})
        } finally {
            runInAction(() => {this.isLoading = false})
        }
    }
}

export default RegisterStore