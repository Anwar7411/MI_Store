const express=require('express')
const Strip=require('stripe');
const { OrderModel } = require('../models/Orders.model');

require('dotenv').config();

const stripe=Strip(process.env.strip_key);
const StripRouter=express.Router();
StripRouter.post('/create-checkout-session', async (req, res) => {
 
    const line_items=req.body?.cartitem?.map(prod=>(
      { 
        price_data: 
        {currency: 'inr', 
        product_data: {
          name:prod.title,
          images:[prod.image],
          metadata:{
          id:prod._id
        }
      }, 
        unit_amount: +(prod.price)*100,
      },
       quantity: +(prod.quantity),
     }
     ))
 
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.url}/paymentsuccess`,
      cancel_url: `${process.env.url}/paymentfail`,
    });
     
       const order=await OrderModel.create(req.body.cartitem)    
     
    res.send({url:session.url});
  });

  module.exports={StripRouter}