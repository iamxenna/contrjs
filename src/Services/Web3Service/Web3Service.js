import Web3 from "web3"
import ABI from "./ABI.json"

class Web3Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI, "0x5FbDB2315678afecb367f032d93F642f64180aa3");

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
}

export default new Web3Service();