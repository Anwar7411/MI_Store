import './Eachcard.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom'
import { Alert, Snackbar } from '@mui/material';
import React from 'react'


const EachCard = ({ el }) => {
  const [open2, setOpen2] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate()

  const handleClick = () => {

    navigate(`/singleproduct/${el._id}`)
  }
  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == el._id) {
        return setOpen(true);
      }
    }
    el.quantity = 1;
    cart.push(el)
    localStorage.setItem("cart", JSON.stringify(cart));
    setOpen2(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen2(false);
    setOpen(false);
  };

  return (
    <div className='eachcarddiv'>
      <h5>{el.title}</h5>
      <div className='eachcardfirstdiv'>
        <p><CurrencyRupeeIcon sx={{ height: "15px" }} />{el.price}</p>
        <p><del><CurrencyRupeeIcon sx={{ height: "15px" }} />{el.strike_off}</del></p>
      </div>
      <div className='eachcardseconddiv'>
        <button onClick={handleClick}>Buy now</button>
        <button onClick={handleCart}>Add to Cart</button>
      </div>
      <img src={el.image} alt="" />
      {el.category == "phone" ? <div className='eachcardthirddiv'>
        <p>8GB+128GB</p>
        <p>12GB+256GB</p>
      </div> : <div></div>
      }
      <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '300px', backgroundColor: "#4d9a51", color: "black" }}>
          Product Added To Cart
        </Alert>
      </Snackbar>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '300px' }}>
          Product Already In The Cart
        </Alert>
      </Snackbar>

    </div>
  )
}

export default EachCard



