import React from 'react'
import { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Cart.css'
import axios from 'axios'

const Cart = () => {
    const [cartitem,setCartItem]=useState([]);
    const[total,setTotal]=useState(0)
    const []=useState(1)


 useEffect(()=>{
   let cart=JSON.parse(localStorage.getItem("cart"));
        setCartItem(cart);
 },[])

 useEffect(()=>{
  let totalprice=0;
cartitem.forEach((el)=>{
   totalprice +=(el.quantity*el.price)
})
setTotal(totalprice)
 },[cartitem])

 console.log(total)
const handleIncrement=(id)=>{
  let setcart=[]
 cartitem.forEach(ele => {
  if(ele._id==id){
      ele.quantity=Number(`${ele.quantity}`)+1;
      setcart.push(ele)
  }else(
    setcart.push(ele)
  )
})
setCartItem(setcart)
}

const handleDeccrement=(id)=>{
  let setcart=[]
  cartitem.forEach(ele => {
   if(ele._id==id){
       ele.quantity=Number(`${ele.quantity}`)-1;
       setcart.push(ele)
   }else(
     setcart.push(ele)
   )
 })
 setCartItem(setcart)
  }

  const handledelete=(id)=>{
let restproduct=cartitem.filter((ele)=>(
  ele._id!=id
))
setCartItem(restproduct);
localStorage.setItem("cart",JSON.stringify(restproduct));
  }

  const handleCheckout=()=>{
  axios.post("http://localhost:8080/strip/create-checkout-session",{
    cartitem,
    userId:"1213456789"
  }).then((res)=>{
    window.location.href=res.data.url
  })
  }

  return (
    <div className='maintable'>
       <Table striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>Item</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartitem.map((product,i)=>(
          <tr className='tablerow'>
          <td><h6>{i+1}</h6></td>
          <td>
            <div>
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            </div>
          </td>
          <td><h6>{product.price}</h6></td>
          <td>
            <div>
            <button onClick={()=>handleDeccrement(product._id)}>-</button>
            <div>{product.quantity}</div>
            <button onClick={()=>handleIncrement(product._id)}>+</button>
            </div>          
          </td>
          <td><h5>{Number(product.quantity)*Number(product.price)}</h5></td>
          <td>
            <div onClick={()=>handledelete(product._id)}><DeleteIcon /></div>
          </td>
        </tr>
        ))}        
      </tbody>
    </Table>
    <div id='lastdiv'>
      <div>
      <h5>Sub Total</h5>
      <h4><CurrencyRupeeIcon />{total}</h4>
      </div>
      <button onClick={handleCheckout}>Check Out ({cartitem.length})</button>
    </div>
    </div>
  )
}

export default Cart