const bcrypt = require('bcryptjs')
const User = require('../models/user')
const JWT =require("jsonwebtoken")
const JWT_SECRET = "VihariTravelSite"

module.exports.verifyUser =  async(req,res)=>{

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
  
}

module.exports.createUser = async(req,res)=>{
    await User.findOne({ email: req.body.email }).then(async user => {
        if (user) {
          return res.json({ error: "Email already exists!!" })
        }
        else {
         
          // Hashing password
          const salt = await bcrypt.genSalt(5);
          const secPass = await bcrypt.hash(req.body.password,salt) 
          
          // Creating a user
         await User.create({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            password: secPass
        }).then(user => {

          // Creating authToken for user
  
          const authToken =JWT.sign(user.id,JWT_SECRET)
          res.json({success:true,authToken})
  
        }).catch((error) => {
            console.log(error);
            // sending errors
            res.json({error:"Internal server error"});
          })
        }
      })
  
}