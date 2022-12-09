import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Signup = () => {
  const [values, setValues] = React.useState({
    name:'',
    Email: '',
    password: '',
    confirmPassword:'',
    showPassword: false,
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

  
  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off">
      
      <div>
      <TextField
          required
          type="text"
          id="outlined-required"
          label="Full Name"
          Value={values.name}
          style={{width:"400px",backgroundColor:"#2d2d2d"}}
          inputProps={{ style: { color: "white",height:"30px",fontSize:"20px" } }}
        /><br />
      <TextField
          required
          type="email"
          id="outlined-required"
          label="Email"
          Value={values.Email}
          style={{width:"400px",backgroundColor:"#2d2d2d"}}
          inputProps={{ style: { color: "white",height:"30px",fontSize:"20px" } }}
        /><br />
        <FormControl sx={{ m: 1, width: '400px',backgroundColor:"#2d2d2d",}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            inputProps={{ style: { color: "white",height:"30px",fontSize:"20px" } }}
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
        <FormControl sx={{ m: 1, width: '400px',backgroundColor:"#2d2d2d",}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            inputProps={{ style: { color: "white",height:"30px",fontSize:"20px" } }}
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmPassword}
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
            label="Confirm Password"
          />
        </FormControl>
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" style={{width:"400px",height:"50px",margin:"10px 10px",fontSize:"20px"}}>
        Sign Up
      </Button>
      </ThemeProvider>
      </div>
      <div style={{display:"flex",gap:"40px"}}>
      <div><p style={{width:"150px",color:"#e3641d",margin:"10px",fontSize:"18px"}}>Forget Password ?</p></div>
      <p style={{color:"#e3641d",marginTop:"10px",fontSize:"18px"}}>Signin with your Phone Number</p>
      </div>
      
    </Box>
  )
}

export default Signup