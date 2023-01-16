const mongoose=require('mongoose');

const TvSchema=({
    title:String,
    price:Number,
    strike_off:Number,
    category:String,
    image:String,
})

const TvModel=mongoose.model("Tvs",TvSchema)

module.exports={TvModel}