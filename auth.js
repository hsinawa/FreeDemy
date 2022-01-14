const mongoose = require('mongoose')

var mongodburl = 'mongodb+srv://awanish:awanishmishra3@cluster0.ipjrb.mongodb.net/freedemy'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Freedemy'  )
} )

mongoose.exports = mongoose

