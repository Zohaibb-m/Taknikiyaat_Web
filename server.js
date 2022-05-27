require('dotenv').config() 
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path = require("path")
const app=express();
app.use(express.json());
app.use(cors());



app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server Started at Port: ",PORT);
})
