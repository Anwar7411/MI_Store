const mongoose=require('mongoose');

const PhoneSchema=({
title:String,
price:Number,
strike_off:Number,
brand:String,
category:String,
image:String,
Storage:String
})

const PhonesModel=mongoose.model("Phones",PhoneSchema)

module.exports={PhonesModel}