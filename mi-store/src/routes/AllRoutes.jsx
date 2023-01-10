import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
import Home from "../pages/home/Home"
import CheckoutFailure from '../pages/payment/CheckoutFailure'
import CheckoutSuccess from '../pages/payment/CheckoutSuccess'
import Phones from '../pages/phone/Phones'
import SigninSignup from '../pages/signin&signuppage/SigninSignup'
import SingleProductview from '../pages/singlepage/SingleProductview'
import Tv from '../pages/tv/Tv'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<SigninSignup />}></Route>
        <Route path='/phones' element={<Phones />}></Route>
        <Route path='/tvs' element={<Tv />}></Route>
        <Route path='/singleproduct/:id' element={<SingleProductview />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/paymentsuccess' element={<CheckoutSuccess />}></Route>
        <Route path='/paymentfail' element={<CheckoutFailure />}></Route>

    </Routes>
  )
}

export default AllRoutes