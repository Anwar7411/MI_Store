import React from 'react'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Cart.css'
import axios from 'axios'
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { ProgressBar } from 'react-loader-spinner'
import {useSelector,useDispatch} from 'react-redux'
import { getCartData } from '../../redux/appredux/Action';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartitem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [buttonClick, setbuttonclick] = useState(false);
  const [open,setOpen]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isAuth=useSelector((store)=>store.Authreducer.isAuth)
  const userDetails=useSelector((store)=>store.Authreducer.userDetails);
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartItem(cart);
  }, [])

  useEffect(() => {
    let totalprice = 0;
    cartitem.forEach((el) => {
      totalprice += (el.quantity * el.price)
    })
    setTotal(totalprice)
  }, [cartitem])
  
  // if(!isAuth){
  // navigate("/login")
  // }

  const handleIncrement = (id) => {
    let setcart = []
    cartitem.forEach(ele => {
      if (ele._id == id) {
        ele.quantity = Number(`${ele.quantity}`) + 1;
        setcart.push(ele)
      } else (
        setcart.push(ele)
      )
    })
    setCartItem(setcart)
  }

  const handleDeccrement = (id) => {
    let setcart = []
    cartitem.forEach(ele => {
      if (ele._id == id) {
        ele.quantity = Number(`${ele.quantity}`) - 1;
        setcart.push(ele)
      } else (
        setcart.push(ele)
      )
    })
    setCartItem(setcart)
  }

  const handledelete = (id) => {
    let restproduct = cartitem.filter((ele) => (
      ele._id != id
    ))
    setCartItem(restproduct);
    localStorage.setItem("cart", JSON.stringify(restproduct));
    dispatch(getCartData());
     setOpen(true)
  }

  const handleCheckout = () => {
    const date=new Date();
   
    cartitem?.forEach((el)=>{
      el.user=userDetails._id;
      el.date=date.toLocaleDateString()
    })
    console.log(cartitem)
    if (cartitem) {
      axios.post("http://localhost:8080/strip/create-checkout-session", {
        cartitem,
        user: `${userDetails._id}`
      }).then((res) => {
        window.location.href = res.data.url
      })

    } else {
      alert("add products to cart")
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  

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
          {cartitem.map((product, i) => (
            <tr className='tablerow'>
              <td><h6>{i + 1}</h6></td>
              <td>
                <div>
                  <img src={product.image} alt="" />
                  <h6>{product.title}</h6>
                </div>
              </td>
              <td><h6>{product.price}</h6></td>
              <td>
                <div>
                  <button onClick={() => handleDeccrement(product._id)} disabled={product.quantity == 1}>-</button>
                  <div>{product.quantity}</div>
                  <button onClick={() => handleIncrement(product._id)}>+</button>
                </div>
              </td>
              <td><h6>{Number(product.quantity) * Number(product.price)}</h6></td>
              <td>
                <div onClick={() => handledelete(product._id)}><DeleteIcon /></div>
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
        {buttonClick? <div><ProgressBar height="100" width="170" ariaLabel="progress-bar-loading" wrapperStyle={{}} wrapperClass="progress-bar-wrapper" borderColor = 'black' barColor = '#ff6700'/></div>
                      :<button onClick={() => { setbuttonclick(true); handleCheckout() }}>Check Out ({cartitem.length})</button> }
          
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '300px',backgroundColor:"#4d9a51",color:"black" }}>
           Product Deleted From Cart
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Cart