import Web3 from "web3"
import ABI from "./ABI.json"

class Web3Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI, "0xD8eC35bB38A84A69322DD4b269c910Bc6ED8e814");

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

    async setRole(userAddress, role) {
        try {
            return await this.contract.methods.setRole(role).send({from: userAddress});
        } catch (e) {
            console.log(e);
        }
    }

    async addAdmin(userAddress, address) {
        try {
            return await this.contract.methods.addAdmin(userAddress).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async addMarket(shopAddress, city, address) {
        try {
            return await this.contract.methods.addMarket(shopAddress, city).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async removeMarket(shopAddress, address) {
        try {
            return await this.contract.methods.removeMarket(shopAddress).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getMarket(marketAddress, address) {
        try {
            return await this.contract.methods.getMarket(marketAddress).call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async getMarkets(address) {
        try {
            return await this.contract.methods.getUsers().call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async requestVendor(address) {
        try {
            return await this.contract.methods.requestVendor(address).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async requestCustomer(address) {
        try {
            return await this.contract.methods.requestCustomer().send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async listVendorRequests(address) {
        try {
            return await this.contract.methods.listVendorRequests().call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async listCustomerRequests(address) {
        try {
            return await this.contract.methods.listCustomerRequests().call({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async createComment(id, comment, address) {
        try {
            return await this.contract.methods.createComment(id, comment).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async approveVendor(userAddress, address) {
        try {
            return await this.contract.methods.approveVendor(userAddress).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }

    async demoteVendor(vendorAddress, address) {
        try {
            return await this.contract.methods.demoteVendor(vendorAddress).send({from: address});
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Web3Service();
