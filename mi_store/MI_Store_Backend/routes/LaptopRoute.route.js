const express=require('express')
const { LaptopModel } = require('../models/LaptopModel.model')


const LaptopRouter=express.Router()

LaptopRouter.get("/",async (req,res)=>{

    try{
        const filter=req.query.filter;
        const order=Number(req.query.order);
        const page=Number(req.query.page) || 1;
        const limit=Number(req.query.limit) || 12;

       if(filter){
        const data= await LaptopModel.find({category:filter}).limit(limit).skip(limit*(page-1)).sort({price:order});
        const count=await LaptopModel.find({category:filter})
        
        res.send({data:data,count:count.length})
       }else{
        const data= await LaptopModel.find().limit(limit).skip(limit*(page-1)).sort({price:order});
        const count1=await  LaptopModel.find();
        const count=count1.length
        res.send({data:data,count:count})
       }
      
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from Laptop please try again later!")
    }
})
LaptopRouter.get("/single/:id",async (req,res)=>{

    try{
        const param=req.params.id;
          const laptop=await LaptopModel.findOne({_id:param})
          res.send(laptop)
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from laptop please try again later!")
    }
})
LaptopRouter.post("/addlaptop",async (req,res)=>{
    const laptopdata=req.body;
    try{
        const laptopadddata=await LaptopModel.create(laptopdata);
        res.send("Laptop Data Posted Successfully")
    }
    catch(err){
        console.log(err)
        res.send("Error in posting data please try again later!")
    }
})

module.exports={LaptopRouter}