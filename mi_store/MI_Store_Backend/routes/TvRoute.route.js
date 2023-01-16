const express=require('express')
const { TvModel } = require('../models/TvModel.model')


const TvRouter=express.Router()

TvRouter.get("/",async (req,res)=>{

    try{
        const order=Number(req.query.order);
        const page=Number(req.query.page) || 1;
        const limit=Number(req.query.limit) || 12;
        const data= await TvModel.find().limit(limit).skip(limit*(page-1)).sort({price:order});
        const count1=await  TvModel.find();
        const count=count1.length
        res.send({data:data,count:count})
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from Tv please try again later!")
    }
})
TvRouter.get("/single/:id",async (req,res)=>{

    try{
        const param=req.params.id;
          const tv=await TvModel.findOne({_id:param})
          res.send(tv)
    }
    catch(err){
        console.log(err)
        res.send("Error in getting data from Tv please try again later!")
    }
})
TvRouter.post("/addtv",async (req,res)=>{
    const tvdata=req.body;
    try{
        const tvadddata=await TvModel.create(tvdata);
        res.send("Tv Data Posted Successfully")
    }
    catch(err){
        console.log(err)
        res.send("Error in posting data please try again later!")
    }
})

module.exports={TvRouter}