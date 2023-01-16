const mongoose=require('mongoose');

const LaptopSchema=({
    title:String,
    price:Number,
    strike_off:Number,
    category:String,
    image:String,
    processor:String
})

const LaptopModel=mongoose.model("Laptops",LaptopSchema)

module.exports={LaptopModel}