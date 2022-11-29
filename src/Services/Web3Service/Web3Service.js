import Web3 from "web3"
import ABI from "./ABI.json"

class Web3Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI, "0x032B269fa9e900Dc4036DD24C3A4D665710e3e83");

    async registerUser(address, name, password, word) {
        try {
            return await this.contract.methods.registerUser(name, password, word).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async authorize(address, password) {
        try {
            return await this.contract.methods.authorize(password).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async checkWord(address, word) {
        try {
            return await this.contract.methods.checkWord(word).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async setRole(address, role) {
        try {
            return await this.contract.methods.setRole(role).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async addAdmin(address) {
        try {
            return await this.contract.methods.addAdmin(address).send({from: "0x3Dc5eaCBb57B4a935e186386152e408428A7e8eE"});
        } catch (e) {
            console.log(e);
        }
    }

    async addMarket(address, city) {
        try {
            return await this.contract.methods.addMarket(address, city).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async removeMarket(address) {
        try {
            return await this.contract.methods.removeMarket(address).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getMarket(address) {
        try {
            return await this.contract.methods.getMarket(address).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Web3Service();