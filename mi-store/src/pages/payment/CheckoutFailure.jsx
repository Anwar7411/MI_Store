import React from 'react'
import { useNavigate } from 'react-router-dom';

const CheckoutFailure = () => {
  const navigate=useNavigate();
  setTimeout(()=>{
    navigate("/cart")
      },6000)
  return (
    <div style={{marginTop:"60px"}}>
      <img src="https://thumbs.dreamstime.com/b/online-payment-error-angry-people-declined-vector-concept-164895617.jpg" alt="" style={{width:"45%",height:"100vh",marginLeft:"30%"}}/>
      <div style={{width:"600px",margin:"auto",position:"absolute",zIndex:"99",top:"200px",left:"34%",textAlign:"center"}}>
        <img src="https://media2.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif?cid=ecf05e47fkhws512mq6lory5t0e14rl98tftt9omy2qhlshh&rid=giphy.gif&ct=g" alt=""  width="160px" height="200px"/>
      </div>
    </div>
  )
}

export default CheckoutFailure