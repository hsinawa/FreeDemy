const mongoose = require('mongoose');

const Message = mongoose.Schema({

    name : {
        type : String , 
        require : true 
    } ,

    email :{
        type : String ,
        require : true
    } ,

    message : {
        type : String ,
        require : true
    }

})

const MessageModel = mongoose.model('MessageModel' , Message );

module.exports = MessageModel;