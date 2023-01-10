import React from 'react'
import './Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const signinlink = () => {
        navigate("/login")
    }
    return (
        <div>
            <div class="navbar">
                <div class="navfirstdiv">
                    <p>XIAOMI INDIA</p>
                    <Divider orientation="vertical" sx={{ height: "15px", }} color="#9e9e93 " />
                    <p>GET MI STORE APP</p>
                    <Divider orientation="vertical" sx={{ height: "15px", }} flexItem color="#9e9e93 " />
                    <p>ONLINE HELP</p>
                    <Divider orientation="vertical" sx={{ height: "15px", }} flexItem color="#9e9e93 " />
                    <p>RETAIL STORE</p>
                </div>
                <div class="navseconddiv">
                    <p onClick={signinlink}>SIGN IN</p>
                    <Divider orientation="vertical" sx={{ height: "15px", }} flexItem color="#9e9e93 " />
                    <p onClick={signinlink}>SIGN UP</p>
                    <Divider orientation="vertical" sx={{ height: "15px", }} flexItem color="#9e9e93 " />
                    <div><ShoppingCartOutlinedIcon fontSize="small" sx={{ marginTop: "6px" }} /><span >CART (0)</span></div>
                </div>
            </div>

           
        </div>
    )
}

export default Navbar