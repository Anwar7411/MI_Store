const express=require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cors = require("cors");
require('dotenv').config();


const { connection } = require('./server');
const { UserModel } = require('./models/UsersModel.model');
const {PhoneRouter}=require('./routes/PhonesRoute.route');
const {Auth}=require("./middlewares/Authorization")
const {TvRouter}=require("./routes/TvRoute.route")
const {StripRouter}=require('./routes/Strip.route')
const {LaptopRouter}=require('./routes/LaptopRoute.route')
const {Search}=require('./routes/Searchbar.route')

const PORT=process.env.PORT || 8080
const app=express();
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.post("/signup",async (req,res)=>{
    const payload=req.body;
    const userCheck=await UserModel.findOne({email:`${payload.email}`})
    if(userCheck?.email){
        res.send("User Already Exists")
    }
    try{
        bcrypt.hash(payload.password, 5,async function(err, hash) {
            payload.password=hash;
            const userdata=new UserModel(payload);
            await userdata.save();
            res.send("Signup Successfull")
        })
    }
    catch(err){
        console.log(err)
        res.send("Something went wrong Please try again later!")
    }
})

app.post("/login",async (req,res)=>{
    const payload=req.body;
    const usercheck=await UserModel.findOne({email:`${payload.email}`});
    try{
        if(usercheck?.email){
            const hashed_password = usercheck.password;
            bcrypt.compare(payload.password, hashed_password, function(err, result) {
                if(err){
                    res.send("Something went wrong please try again later!");
                    console.log("Error in bcrypt",err)
                }
                if(result){
                    const token = jwt.sign({ userDetails:payload  }, `${process.env.secret_key}`);
                    res.send({msg:"Login Successfull",token:token,userDetails:usercheck})
                }
             })}else{
                res.send("Something went wrong please try again later!");
             } 
    }
    catch(err){
        res.send("Login Failed!");
        console.log(err)
    }
   
})

app.use("/phones",PhoneRouter)
app.use("/tv",TvRouter)
app.use("/laptop",LaptopRouter)
app.use("/search",Search)
app.use(Auth)
app.use("/strip",StripRouter)



app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log("Connected to DataBase")
    }
    catch(err){
        console.log("Error in Connecting DB");
        console.log(err)
    }
    console.log("Listening on port 8080")
})