import React from 'react'
import { useNavigate } from 'react-router-dom';

const CheckoutFailure = () => {
  const navigate=useNavigate();
  setTimeout(()=>{
    navigate("/cart")
      },6000)
  return (
    <div>
      <img src="https://thumbs.dreamstime.com/b/online-payment-error-angry-people-declined-vector-concept-164895617.jpg" alt="" style={{width:"100%",height:"100vh"}}/>
      <div style={{width:"600px",margin:"auto",position:"absolute",zIndex:"99",top:"180px",left:"33%",textAlign:"center"}}>
        <img src="https://media2.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif?cid=ecf05e47fkhws512mq6lory5t0e14rl98tftt9omy2qhlshh&rid=giphy.gif&ct=g" alt=""  width="400px" height="200px"/>
      </div>
    </div>
  )
}

export default CheckoutFailure