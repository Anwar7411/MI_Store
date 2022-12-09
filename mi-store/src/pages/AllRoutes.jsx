import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import SigninSignup from './SigninSignup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Signin' element={<SigninSignup />}></Route>
    </Routes>
  )
}

export default AllRoutes