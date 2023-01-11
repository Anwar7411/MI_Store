import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css"
import { useEffect } from 'react';
import {useLocation,Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import {useSelector,useDispatch} from 'react-redux'
import { Logout } from '../../redux/authredux/Action';
import { getCartData } from '../../redux/appredux/Action';

const Navbar = () => {
  const dispatch=useDispatch();
  const isAuth=useSelector((store)=>store.Authreducer.isAuth)
  const carts=useSelector((store)=>store.Appreducer.cart)
  const userDetails=useSelector((store)=>store.Authreducer.userDetails);
  console.log("userDetails",userDetails,isAuth)

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  useEffect(()=>{
 dispatch(getCartData())
},[]);
const handleLogout=()=>{
dispatch(Logout())
}

return (
    <div className='secondNav'>
      <div>
       <Link to='/'><img className='firstimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/225px-Xiaomi_logo_%282021-%29.svg.png" /></Link> 
        <Link to="/phones" className='textde'><p>Phones</p></Link>
        <Link to="/tvs" className='textde'><p>TV</p></Link> 
        <Link to="/laptops" className='textde'><p>Laptops & Tablets</p></Link> 
        <p>Accessories</p>
      </div>

      <div>
        <div><Search sx={{border:"1px solid black"}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: "black" }}
          />
        </Search>
        </div>
         <Link to="/cart" className='textde'><Box style={{color:"black"}}>
            <Tooltip title={
              carts?.length>0 ?
              <div style={{backgroundColor:"white",border:"none",color:"black"}}>
                {carts.map((el)=>(
              
              <div style={{display:"flex",alignItems:"center",width:"260px",marginTop:"5px",gap:"50px"}}>
                <img src={el.image} alt="" style={{width:"100px",height:"60px"}} />
                <div>
                <p style={{fontWeight:"400",fontSize:"16px"}}>{el.title}</p>
                <p style={{fontSize:"14px",color:"#ff6900"}}><CurrencyRupee sx={{height:"15px"}}/><span style={{fontSize:"14px",fontWeight:"400",marginTop:"-4px"}}>{el.price}</span></p>
                </div>
              </div>         
          ))}
          <Link to="/cart"><button style={{width:"90%",margin:"10px",color:"white",backgroundColor:"#191919",borderRadius:"8px",fontSize:"16px"}}>Check Out</button></Link>
              </div> : <div style={{fontSize:"16px",fontWeight:"400"}}>Cart Is Empty</div>
            } placement="bottom" arrow >
            <Box><ShoppingCartOutlinedIcon fontSize="small" sx={{ marginTop: "-4px" }} /><span >{carts.length}</span></Box>
          </Tooltip>
          </Box></Link>

        <Box sx={{cursor:"pointer"}}>
        <Tooltip title={
         userDetails && userDetails.email ? <div style={{backgroundColor:"white",border:"none",color:"black"}}>
            <div>
              <div style={{display:"flex",margin:"20px",gap:"20px"}}>
                <img src="https://i.pinimg.com/originals/33/35/0a/33350a6314b66017370ada20437fff04.gif" width="70px" height="50px" alt="" />
                 <p style={{fontSize:"18px",fontWeight:"300",color:"#ff6900",textAlign:"center",marginTop:"15px"}}>{userDetails.name}</p>
              </div>
            <p style={{fontSize:"16px",margin:"10px"}}>Email :<span style={{fontSize:"16px",color:"#ff6900"}}>{userDetails.email}</span></p>
            </div>
            <button style={{width:"90%",margin:"10px",color:"white",backgroundColor:"#191919",borderRadius:"8px",fontSize:"14px"}} onClick={handleLogout}>Log Out</button>
          </div>:
          <div style={{width:"100px",backgroundColor:"white",color:"black",fontSize:"18px",textAlign:"center",fontWeight:"200"}}>
            <Link to="/login" className='textde'><div>SignIn</div></Link>
            <Link to="/login" className='textde'><div>SignUp</div></Link>
          </div>
        } placement="bottom" arrow ><PersonIcon /></Tooltip>
        </Box>
          
      </div>
    </div>
  )
}

export default Navbar