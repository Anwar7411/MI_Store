import React ,{useState}from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const navigate=useNavigate();
  
    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify([]))
    },[])
    setTimeout(()=>{
  navigate("/")
    },6000)
  return (
    <div >
      <img src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4209.jpg?w=2000" alt="" style={{width:"100%",height:"100vh"}}/>
      <div style={{width:"600px",margin:"auto",position:"absolute",zIndex:"99",top:"200px",left:"33%",textAlign:"center"}}>
        <img src="https://gogoacarrentals.com/wp-content/uploads/2019/02/tick.gif" alt=""  style={{width:"90px",height:"70px"}}/>
        <h2 style={{fontFamily:"Inter, Arial, sans-serif;",color:"#ff6700"}}>Order Confirmed</h2>
      </div>
    </div>
  )
}

export default CheckoutSuccess