require('dotenv').config() 
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path = require("path")
const app=express();
app.use(express.json());
app.use(cors());


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server Started at Port: ",PORT);
})
