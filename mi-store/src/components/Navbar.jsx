import React from 'react'
import './Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';
import Carousel_home from './Carousel_home';
import Second_Nav from './Second_Nav';
const Navbar = () => {
    const firstCarousel=["https://i02.appmifile.com/185_operator_in/24/11/2022/f939b57b5e415094c4ad2db32f6cabba.jpg","https://i02.appmifile.com/439_operator_in/25/11/2022/ef10a21513490e5e09571cff35d72ff4.gif",
                         "https://i02.appmifile.com/913_operator_in/25/11/2022/7a41a0c7c6cdfac17805e973668976a9.jpg","https://i02.appmifile.com/973_operator_in/25/11/2022/6ac8d2fb91248eb8e98814aff36813e9.jpg",
                         "https://i02.appmifile.com/806_operator_in/25/11/2022/b447c019fb393fd10663a69bf9368f2c.jpg","https://i02.appmifile.com/296_operator_in/25/11/2022/78a9b959ce5ba2015dd82af7abdca14a.jpg"
                        ]               
    return (
        <div>
            <div class="navbar">
                <div class="navfirstdiv">
                    <p>XIAOMI INDIA</p>
                    <Divider orientation="vertical" sx={{ height: "15px",}} color="#9e9e93 " />
                    <p>GET MI STORE APP</p>
                    <Divider orientation="vertical" sx={{ height: "15px",}} flexItem color="#9e9e93 " />
                    <p>ONLINE HELP</p>
                    <Divider orientation="vertical" sx={{ height: "15px",}} flexItem color="#9e9e93 " />
                    <p>RETAIL STORE</p>
                </div>
                <div class="navseconddiv">
                    <p>SIGN IN</p>
                    <Divider orientation="vertical" sx={{ height: "15px",}} flexItem color="#9e9e93 " />
                    <p>SIGN UP</p>
                    <Divider orientation="vertical" sx={{ height: "15px",}} flexItem color="#9e9e93 " />
                    <div><ShoppingCartOutlinedIcon fontSize="small" sx={{ marginTop: "6px" }} /><span >CART (0)</span></div>
                </div>
            </div>
            <div className='second_Nav'>
                <Second_Nav />
            </div>
            <div>
                <Carousel_home arr={firstCarousel}/>
            </div>
        </div>
    )
}

export default Navbar