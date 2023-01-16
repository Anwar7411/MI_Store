const express=require('express')
const { PhonesModel } = require('../models/PhonesModel.model')


const PhoneRouter=express.Router()

PhoneRouter.get("/",async (req,res)=>{
   
    try{
        const filter=req.query.filter;
        const order=Number(req.query.order);
        const page=Number(req.query.page) || 1;
        const limit=Number(req.query.limit) || 12;

       if(filter){
        const data= await PhonesModel.find({brand:filter}).limit(limit).skip(limit*(page-1)).sort({price:order});
        const count=await PhonesModel.find({brand:filter})
        
        res.send({data:data,count:count.length})
       }else{
        const data= await PhonesModel.find().limit(limit).skip(limit*(page-1)).sort({price:order});
        const count1=await  PhonesModel.find();
        const count=count1.length
        res.send({data:data,count:count})
       }
      
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from phones please try again later!")
    }
})
PhoneRouter.get("/single/:id",async (req,res)=>{

    try{
        const param=req.params.id;
          const phone=await PhonesModel.findOne({_id:param})
          res.send(phone)
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from phones please try again later!")
    }
})
PhoneRouter.post("/addphone",async (req,res)=>{
    const phonedata=req.body;
    try{
        const phoneadddata=new PhonesModel(phonedata);
         await phoneadddata.save();
        res.send("Phones Data Posted Successfully")
    }
    catch(err){
        console.log(err)
        res.send("Error in posting data please try again later!")
    }
})

module.exports={PhoneRouter}