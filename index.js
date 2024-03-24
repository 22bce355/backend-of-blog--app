const express =  require('express');
const app =  express();
require('dotenv').config();
const Dbconnect = require('./config/Dbconnect');
const postroute = require('./routes/route');
const port = process.env.PORT || 3000 ;

app.use(express.json());

app.use('/post/another',postroute);



app.listen(port,()=>{
    console.log("server started succesfully");
})

Dbconnect();

app.get('/',(req,res)=>{
    res.send('<h1 >this is home page with default get route</h1>');
})

