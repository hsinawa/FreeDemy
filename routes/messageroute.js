const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const MessageModel = require('../models/message')

router.post('/messagesend' , (req,res)=>{

   

    const message = new MessageModel({
        name : req.body.name ,
        email : req.body.email ,
        message : req.body.message
    })

    message.save( err=>{
        if(err)
        {
           return res.send({message:'Something went wrong',err})
        }
        else{
            res.send({message:'Message Sent'})
        }
    } )

} )





module.exports = router;