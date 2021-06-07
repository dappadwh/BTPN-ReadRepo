const Collection = require("../database/connection")

class UserDataService{
    
    async findAll(){
        const user = await Collection('userData')
        return user.find().toArray()
    }

    async findByAccountNumber(noAccount){
        const user = await Collection('userData')
        return user.findOne({accountNumber: noAccount})
    }

    async findByIdentityNumber(noIdentity){
        const user = await Collection('userData')
        return user.findOne({identityNumber: noIdentity})
    }
}

module.exports = UserDataService;