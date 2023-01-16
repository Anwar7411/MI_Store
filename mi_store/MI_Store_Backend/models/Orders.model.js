const mongoose=require('mongoose');

const OrderSchema=({
title:String,
price:Number,
strike_off:Number,
brand:String,
category:String,
image:String,
user:String,
date:String,
})

const   OrderModel=mongoose.model("Orders",OrderSchema)

module.exports={OrderModel}