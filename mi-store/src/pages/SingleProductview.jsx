import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SingleProductview = () => {
  return (
    <Box sx={{width:"60%",display:"flex",margin:"auto",marginTop:"20px"}}>
        <Box>
            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1662398930.47448521.jpg" alt="" width="450px" height="400px"/>
        </Box>
        <Box sx={{overflow:"auto"}}>
            <h2>Redmi A1</h2>
            <p sx={{color:"#a1a1a1"}}>2GB+32GB</p>
            <Box sx={{display:"flex",gap:"20px"}}>
                <h6>6449</h6>
                <h6>8999</h6>
            </Box>
            <ul  style={{color:"grey",listStyleType: "square"}}>
                <li>10% Instant Discount up to ₹1,000 with HDFC & SBI cards</li>
                <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
                <li>Get 3 months of Youtube Premium Membership Free</li>
                <li>₹4,000 Exchange Bonus | Up to ₹16,500 off with Mi Exchange</li>
                <li>Use Code MBK250 | Flat Rs.250 Cashback on MobiKwik wallet</li>
            </ul>
            <Box>
                <ul style={{color:"#ff6900",listStyleType: "square",display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
                    <li>10 DAYS REPLACEMENT POLICY</li>
                    <li>COD</li>
                    <li>MI SCREEN PROTECT</li>
                    <li>COMPARE</li>
                </ul>
            </Box>
            <Box>
                <h4>Quantity</h4>
                <Box sx={{display:"flex",gap:"10px",marginTop:"10px"}}>
                <button>-</button>
                <h5>1</h5>
                <button>+</button>
                </Box>
            </Box>
            <Box>
                <Box>
                    <p>Titiegdbsjdbsamdbsamhjbd</p>
                    <h5></h5>
                </Box>
                 <Box>
                    <p>Total</p>
                    <h4>Price</h4>
                 </Box>
            </Box>
            <button>BUY NOW</button>
        </Box>
    </Box>
  )
}

export default SingleProductview