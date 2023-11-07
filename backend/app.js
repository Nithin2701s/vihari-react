const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user');
const bcrypt = require('bcryptjs')
const JWT =require("jsonwebtoken")
const {validationResult, body } = require('express-validator');

const JWT_SECRET = "VihariTravelSite"
const app = express()
app.use(express.json())
app.post('/login',[
    body('email','Not a valid email address').isEmail(),
    body('password',"password required").exists()
],async(req,res)=>{
  const result = validationResult(req);
  if(!result.isEmpty()){
    return res.json({result})
  }
  const {email,password} =req.body;
  try {
   let user,success;
  await User.findOne({email}).then((result)=>{
    user=result
   })
   if(user==null){
    return res.json({sucees:false,error:"User not found"})
   }
   const passCompare = await bcrypt.compare(password,user.password);
   if(!passCompare){
    success=false
    return res.json({success,error:"Invalid password"})
   }
   const data ={
    user:{
      id:user.id
    }
  }
  const authToken = JWT.sign(data,JWT_SECRET);
  res.json({success:true,authToken})
  } catch (error) {
    console.log(error)
    res.send("Internal server error");
  }

})

mongoose
  .connect(
    "mongodb+srv://Srikar:Sailu3002@cluster0.ch9hacp.mongodb.net/Vihari"
  ) 
  .then((result) => {
    app.listen(4000, () => {
      console.log("listening to port 4000");
    });
    console.log("Mongodb connected");
  })
  .catch((err) => console.log("MongoDB connection error:", err));