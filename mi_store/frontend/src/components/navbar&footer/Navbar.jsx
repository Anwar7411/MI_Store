import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css"
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {  Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import { useSelector, useDispatch } from 'react-redux'
import { Logout } from '../../redux/authredux/Action';
import { getCartData } from '../../redux/appredux/Action';
import SearchBar from '../searchbar/SearchBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.Authreducer.isAuth)
  const carts = useSelector((store) => store.Appreducer.cart)
  const userDetails = useSelector((store) => store.Authreducer.userDetails);
  const location = useLocation();
  let user={};



  useEffect(() => {
    dispatch(getCartData())
  }, []);

  useEffect(() => {
    user = JSON.parse(localStorage.getItem("userDetails")) 
  }, [location])



  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isAuth", false);
    localStorage.setItem("userDetails", JSON.stringify({}));
    dispatch(Logout());
    user = JSON.parse(localStorage.getItem("userDetails"))
  }

 

  return (
    <div className='secondNav'>
      <div>
        <Link to='/'><img className='firstimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/225px-Xiaomi_logo_%282021-%29.svg.png" /></Link>
        <Link to="/phones" className='textde'><p>Phones</p></Link>
        <Link to="/tvs" className='textde'><p>TV</p></Link>
        <Link to="/laptop" className='textde'><p>Laptops & Tablets</p></Link>
        <p>Accessories</p>
      </div>

      <div>
        <div  className="search" >
          <div><SearchIcon /></div>
          <div ><SearchBar /></div>
        </div>
        <div>
          <Link to="/cart" className='textde'><Box style={{ color: "black" }}>
            <Tooltip title={
              carts?.length > 0 ?
                <div className="cartsinnav">
                  {carts.map((el) => (

                    <div>
                      <img src={el.image} alt="" />
                      <div>
                        <p>{el.title}</p>
                        <p><CurrencyRupee sx={{ height: "15px" }} /><span className="spanincart">{el.price}</span></p>
                      </div>
                    </div>
                  ))}
                  <Link to="/cart"><button className='buttoncheck'>Check Out</button></Link>
                </div> : <div className="cartempty">
                  <img src="https://media2.giphy.com/media/kfS15Gnvf9UhkwafJn/giphy.gif?cid=6c09b952b3a596ec6d0562f6d82899e3de139373733b52ea&rid=giphy.gif&ct=g" alt="" />
                  <p>Cart is Empty!</p>
                </div>
            } placement="bottom" arrow >
              <Box><ShoppingCartOutlinedIcon fontSize="small" sx={{ marginTop: "-4px" }} /><span >{carts ? carts.length : 0}</span></Box>
            </Tooltip>
          </Box></Link>
        </div>

        <div>
          <Box sx={{ cursor: "pointer" }}>
            <Tooltip title={
              user && user?.email ? <div className="userdetails">
                <div>
                  <div >
                    <img src="https://i.pinimg.com/originals/33/35/0a/33350a6314b66017370ada20437fff04.gif" alt="" />
                    <p>{user.name}</p>
                  </div>
                  <p>Email :<span className='userspan'>{user.email}</span></p>
                </div>
                <button className='buttoncheck' onClick={handleLogout}>Log Out</button>
              </div> :
                <div className='signinpart'>
                  <img src="https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg" alt="" />
                  <div>
                    <Link to="/login" className='textde'><div>SignIn</div></Link>
                    <Link to="/login" className='textde'><div>SignUp</div></Link>
                  </div>
                </div>
            } placement="bottom" arrow ><PersonIcon /></Tooltip>
          </Box>

        </div>


      </div>
    </div>
  )
}

export default Navbar