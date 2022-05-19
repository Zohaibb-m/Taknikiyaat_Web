const Users = require('../models/userModel')
const bcrypt=require('bcrypt');
const { hash } = require('bcrypt');
const jwt=require('jsonwebtoken')

const userCtrl={ 
    registerUser: async (req,res)=>{
        try {
            const {firstname,lastname,birthday,email,password,cpassword,gender}=req.body;
            username1=firstname
            const user=await Users.findOne({email:email})
            if (user)return res.json("The email already exists");
            if(password==cpassword);
            else {res.json("The Passwords didnt match!")}
            const hashPassword=await bcrypt.hash(password,10);
            const newUser=new Users({
                firstname:firstname,  
                lastname:lastname,
                username:username1,
                gender:gender,
                birthday:birthday,
                email:email,
                password:hashPassword 
            })
            console.log(newUser)
            await newUser.save();
            res.json("Register a User");
        } catch (err) {
            return res.status(500).json(err.message);
        } 
    },
    loginUser:async (req,res)=>{
        try {
            console.log("Hello")
            const {email,password}=req.body
            const user=await Users.findOne({email:email})
            if(!user)return res.status(400).json({msg:"The User does not exists"})
            
            const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch)return res.status(400).json({msg:"Password Incorrect"})

            //Login Successful
            const payload={id:user._id,username:user.username}
            const token=jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1d"})
            res.json(token)
            // res.json("Login a User");
        } catch (err) {
            return res.status(500).json(err.message);
        }
    },
    verifiedUser: (req,res)=>{
            try {
                const token=req.header("Authorization")
                if(!token)return res.send(false)
                jwt.verify(token,process.env.TOKEN_SECRET,async (err,user)=>{
                    if(err)return res.send(false)
                    const userN=await Users.findById(user.id)
                    if(!userN)return res.send(false)
                    return res.send(true)
                })
            } catch (err) {
                return res.status(400).json(err.message)
            }
    }
}


module.exports = userCtrl