const express = require('express')
const bodyparser= require('body-parser')
const app = express()


app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')

let userroute = require('./routes/userroute')
let messageroute = require('./routes/messageroute')





app.use('/api/users/',userroute)
app.use('/api/message/' , messageroute )



if(process.env.NODE_ENV==='production')

{
    app.use('/' , express.static('client/build') )
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    } )
}



const port =  3033 ;

 app.listen( port , ()=>{
    console.log('Server started of Freedemy')
} )