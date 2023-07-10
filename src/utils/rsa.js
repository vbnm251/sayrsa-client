import { JSEncrypt } from "jsencrypt"

class RsaMessages {
    constructor() {
        this.crypt = new JSEncrypt()
    }

    generate() {
        // const privateKey = localStorage.getItem('privateKey')
        // if (privateKey) {
        //     this.crypt = new JSEncrypt()
        //     this.crypt.setPrivateKey(privateKey)
        // } else {
        //     this.crypt = new JSEncrypt({default_key_size: 128});
        //     localStorage.setItem('privateKey', this.crypt.getPrivateKey())
        // }
        this.crypt = new JSEncrypt({default_key_size: 128});
        console.log('keys generated')
    }

    getPublicKey = () => {
        return this.crypt.getPublicKey();
    }

    getPrivateKey = () => {
        return this.crypt.getPrivateKey();
    }
    
    setPrivateKey = (privateKey) => {
        this.crypt.setPrivateKey(privateKey)
    }

    encrypt = (message, publicKey) => {
        this.crypt.setPublicKey(publicKey)
        return this.crypt.encrypt(message)
    }

    decrypt = (message) => {
        return this.crypt.decrypt(message)
    }

}

export const rsaModlue = new RsaMessages()
