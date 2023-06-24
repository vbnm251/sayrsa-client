import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import AuthService from "../api/AuthService"

class Register {
    username = ''
    password
    bio = ''
    error = ''
    isLoading = ''

    publicKey = ''
    privateKey = ''

    constructor() {
        makeObservable(this, {
            username: observable,
            password: observable,
            bio: observable,
            error: observable,
            isLoading : observable,
            setUsername: action,
            setPassword: action,
            setBio: action,
            register: action,
        })
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

    

    register = async () => {
        try {
            runInAction(() => {this.isLoading = true})
            const responce = await AuthService.register(this.username, this.password, this.bio, this.publicKey, this.privateKey)
        } catch(e) {
            runInAction(() => {this.error = e.message})
        } finally {
            runInAction(() => {this.isLoading = false})
        }
    }
}

export default Register