const bus = require('../models/buses')
const ticket = require('../models/ticket')

module.exports.busList = async(req,res)=>{
   const {srcname,destname} = req.body;
   const buslist = await bus.find({srcname:srcname.toLowerCase(),destname:destname.toLowerCase()})
   if(buslist){
    res.json(buslist)
   }
} 