const express=require('express')
const {OrderModel}=require('../models/Orders.model')
const { LaptopModel } = require('../models/LaptopModel.model')
const { PhonesModel } = require('../models/PhonesModel.model')
const { TvModel } = require('../models/TvModel.model')

const Search=express.Router();

Search.get("/",async(req,res)=>{

const phones=await PhonesModel.find();
const tv=await TvModel.find();
const laptop=await LaptopModel.find();
const data=[...phones,...tv,...laptop]
res.send(data)

})

module.exports={Search}