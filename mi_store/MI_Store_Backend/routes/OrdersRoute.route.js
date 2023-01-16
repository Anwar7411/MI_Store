const express=require('express')
const {OrderModel}=require('../models/Orders.model')

const OrderRouter=express.Router();

OrderRouter.get("/",async(req,res)=>{
    const userId=req.body.userDetails._id;
    try{
     const data=await OrderModel.find({userId});
     res.send(data)

    }
    catch(err){
        console.log(err)
    }

})