const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Routing..
app.use(require('./routes/auth'))
 

app.get('/',(req,res)=>{
  res.send("Hello World!")
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