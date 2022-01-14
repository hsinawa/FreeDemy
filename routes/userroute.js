const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const UserModel = require('../models/user')

router.post('/register' , (req,res)=>{
    UserModel.find( {email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Email Already Registered'})
        }
        else{
            const user = new  UserModel ({
                name : req.body.name ,
                lname : req.body.lname ,
                email:req.body.email ,
                password:req.body.password ,
                phone:req.body.phone
            })


            user.save(err=>{
                if(!err)
                {
                    res.send({message:'Registration Successfull'})
                }
                else
                {
                    res.send({message:'Something went wrong'})
                }
            })
        }
    } )
} )



router.post('/login' , (req,res)=>{

    UserModel.find( {email:req.body.email , password:req.body.password } , (err,docs)=>{
        if(docs.length>0)
        {
            const localsave = {
                name : docs[0].name ,
                _id:docs[0]._id ,
                email : docs[0].email 
            }

            res.send(localsave)
        }
        else
        {
            return res.status(400).json({message:'Something Went Wrong'})
        }
    } )
} )



router.post('/updateuser' , (req,res)=>{

    const {userid,upuser } = req.body 

    UserModel.findByIdAndUpdate( {_id:userid} , {
        name : upuser.name ,
        email : upuser.email ,
        password : upuser.password
    } , (err)=>{
        if(err)
        {
            return res.status(400).json({message:'Something Went Wrong'})

        }
        else
        {
            res.send({message:'Updated Successfully'})
        }
    } )



} )



router.post('/deleteid' , (req,res)=>{

    const {userid} = req.body 

    UserModel.findByIdAndRemove(req.body.userid, (err)=>{
        if(err)
        {
           return res.status(200).send('Something Went Wrong')
        }
        else
        {
            res.send('Deleted Succesfully')
        }
    } )


} )



module.exports = router;