
const db = require('../db.js');

const UsersSchema = new db.Schema({
    
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    gender: {
        type: String,
    },
    salt : {
        type: String,
    },
    hash: {
        type: String,
    },
    cerated: {
        type:Date,
        default:Date.now()
    },
    provider:{
        type: String
    },
    vkId:{
        type: Number,
        unique:true
    }

});

const users = db.model('user', UsersSchema);

module.exports = users;