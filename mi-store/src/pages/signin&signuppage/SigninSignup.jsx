import React from 'react'
import "./SigninSignup.css"
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import Signin from '../../components/signin&signup/Signin';
import Signup from '../../components/signin&signup/Signup';
import { Link } from 'react-router-dom';

const SigninSignup = () => {
  const [signinstate,setSigninstate]=useState("signin")
  const [signinactive,setsigninActive]=useState(true)
  const [signupactive,setsignupActive]=useState(false)
  const handlechange=()=>{
    if(signinstate=="signin"){
      setSigninstate('signup')
      setsigninActive(()=>false)
      setsignupActive(()=>true)
    }else{
      setSigninstate('signin')
      setsignupActive(()=>false)
      setsigninActive(()=>true)
    }
  }

  const styles={
    divcolorsignin:{
      color:signinactive?"#e3641d":"",
      cursor: "pointer"
    },
    divcolorsignup:{
      color:signupactive?"#e3641d":"",
      cursor: "pointer"
    }
  }
  return (
    <div className='Signin'>
      <div className='signinfirstdiv'>
        <img src='https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg' />       
      </div>
      <div >
        <div className='signinseconddiv'>
          <div>
          <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/225px-Xiaomi_logo_%282021-%29.svg.png' /></Link> 
          <h3>Xiaomi Account</h3>
          </div>
         
          <div>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Need Help?</p>
            <Divider orientation="vertical" sx={{ height: "15px", marginTop:"5px"}} color="#9e9e93 " />
            <p>Select Your Language</p>
          </div>
        </div>
    
        <div className='signinbox'>
          <div >
           <div onClick={handlechange} style={styles.divcolorsignin}>Signin</div>
           <Divider orientation="vertical" sx={{ height: "25px",marginTop:"10px" }} color="#9e9e93 " />
           <div onClick={handlechange} style={styles.divcolorsignup}>Signup</div>
          </div>        
         <div>
          {signinstate=='signin'?<Signin />:<Signup />}
         </div>
        </div>
      </div>
    </div>
  )
}

export default SigninSignup