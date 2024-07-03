const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require('./models/register')
const bcrypt = require('bcryptjs');
const assessmentRouter = require('./assessmentRouter');



const app = express()
app.use(express.json())
app.use(cors())
app.use('/assessments',assessmentRouter);


mongoose.connect("mongodb://localhost:27017/SukoonApplication",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post("/login",async (req,res)=>{

    try{
        const {loginEmail, loginPassword} = req.body;
        const user = await RegisterModel.findOne({email: loginEmail});
        
        if(!user){
            return res.json({status: "Email is not registered"});
        }
        const isMatch = await bcrypt.compare(loginPassword, user.password);
        if(!isMatch){
            return res.json({status: "Invalid credentials"});
        }
        res.json({status: "Success",name: user.name});
    } catch(error){
        console.error("Error during login:" ,error);
        res.status(500).json({status: "Internal server error"});
    }
    
    
});

app.post('/register',async (req,res)=>{
    try{
        const {email} = req.body;
        const existingUser = await RegisterModel.findOne({email});
        console.log(existingUser);
        if(existingUser){
            return res.json({status: "Email already exists"});
        }
        const newUser = new RegisterModel(req.body);
        await newUser.save();
        res.json({status: "Registration successful"});

    } catch(error){
        console.error("Error during registration:" ,error);
        res.status(500).json({status: "Internal server error"});
    }
    
    
});



app.listen(3001, ()=>{
    console.log("server is running")
})