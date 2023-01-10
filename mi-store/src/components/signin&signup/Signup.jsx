import {  Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmpassword: false
  });
  const [open, setOpen] = React.useState(false);
  const[open2,setOpen2]=React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmpassword: !values.showConfirmpassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
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

  const handlesignup = () => {
    if (values.password == values.confirmPassword) {
      console.log("else1")
      const payload = {
        email: values.email,
        password: values.password,
        name: values.name,
      }
      axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: payload
      }).then((res) => {
        if(res.data=="Signup Successfull"){
          setOpen2(true);
        }
        
      }).catch((err)=>{
        setOpen(true)
      })
    }else{
      setOpen(true)
    }

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
          type="text"
          id="outlined-required"
          label="Full Name"
          value={values.name}
          onChange={handleChange('name')}
          style={{ width: "400px", backgroundColor: "#2d2d2d" }}
          inputProps={{ style: { color: "white", height: "30px", fontSize: "20px" } }}
        /><br />
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
        
        <FormControl  sx={{ m: 1, width: '400px', backgroundColor: "#2d2d2d"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            inputProps={{ style: { color: "white", height: "30px", fontSize: "20px" } }}
            type={values.showConfirmpassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {values.showConfirmpassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={handlesignup} style={{ width: "400px", height: "50px", margin: "10px 10px", fontSize: "20px" }}>
            Sign Up
          </Button>
        </ThemeProvider>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           Signup Failed Please try again later!
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           Signup Successfull
        </Alert>
      </Snackbar>
      </div>
    </Box>
  )
}

export default Signup