import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Phones from './Phones'
import SigninSignup from './SigninSignup'
import SingleProductview from './SingleProductview'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<SigninSignup />}></Route>
        <Route path='/phones' element={<Phones />}></Route>
        <Route path='/singleproduct/:id' element={<SingleProductview />}></Route>
    </Routes>
  )
}

export default AllRoutes