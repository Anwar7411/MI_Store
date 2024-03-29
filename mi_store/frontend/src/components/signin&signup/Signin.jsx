import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { Login } from '../../redux/authredux/Action';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';


const Signin = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  const[open2,setOpen2]=React.useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isAuth=useSelector((store)=>store.Authreducer.isAuth);
  const userDetails=useSelector((store)=>store.Authreducer.userDetails)
  const token=useSelector((store)=>store.Authreducer.token)
  const isLoading=useSelector((store)=>store.Authreducer.isLoading)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
 
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = createTheme({

    palette: {
      primary: {
        main: '#e3641d',
      },
    },
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpen2(false);
  };
  const handlesignin=()=>{
    const payload={
      email:values.email,
      password:values.password
    }
     if(payload.email && payload.password){
      dispatch(Login(payload)).then((res)=>{      
          setOpen2(true)
      }).catch((err)=>{
        setOpen(true)
      })
     }else{
      
     }
  }
   if(isAuth){
    localStorage.setItem("token",token);
    localStorage.setItem("isAuth",true);
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
    setTimeout(()=>{
     navigate("/")
    },2000)
   }

  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">

      <div>
        <TextField
          required
          type="email"
          id="outlined-required"
          label="Email"
          value={values.email}
          onChange={handleChange('email')}
          style={{ width: "400px", backgroundColor: "#2d2d2d" }}
          inputProps={{ style: { color: "white", height: "30px", fontSize: "20px" } }}
        /><br />
        <FormControl sx={{ m: 1, width: '400px', backgroundColor: "#2d2d2d", }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            inputProps={{ style: { color: "white", height: "30px", fontSize: "20px" } }}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
         {
          isLoading ? <div style={{marginLeft:"100px"}}>
            <ProgressBar height="120" width="170" ariaLabel="progress-bar-loading" wrapperStyle={{}} wrapperClass="progress-bar-wrapper" borderColor = 'black' barColor = '#ff6700'/>
          </div>:<ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={handlesignin} style={{ width: "400px", height: "50px", margin: "10px 10px", fontSize: "20px" }}>
            Sign in
          </Button>
        </ThemeProvider>
         }
        
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <div><p style={{ width: "150px", color: "#e3641d", margin: "10px", fontSize: "18px" }}>Forget Password ?</p></div>
        <p style={{ color: "#e3641d", marginTop: "10px", fontSize: "18px" }}>Signin with your Phone Number</p>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           Login Failed
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%',backgroundColor: "#4d9a51" }}>
           Login Successfull
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Signin