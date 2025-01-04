const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;


const app = express();

app.get("/",(req,res)=> {
    res.send(process.env.OUTPUT);
});

app.listen(port,()=>console.log(port));