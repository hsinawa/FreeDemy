const mongoose = require('mongoose');

const users = mongoose.Schema({

    name : {
        type:String ,
        require:true
    } ,
    lname : {
        type:String ,
        require:true
    } ,
    password : {
        type:String ,
        require:true
    } ,
    email : {
        type:String ,
        require:true
    } ,
 
    phone : {
        type:Number 
        
    } 




})



const UserModel = mongoose.model('UserModel' , users )

module.exports = UserModel;