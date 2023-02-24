import axios from 'axios'
import * as types from './ActionTypes'

const getRequestData=()=>{
    return{
        type:types.GET_DATA_REQUEST,
    }
}
const getPhonesDataSucess=(payload)=>{
    return{
        type:types.GET_PHONES__DATA_SUCCESS,
        payload:payload
    }
}
const getTvDataSucess=(payload)=>{
    return{
        type:types.GET_PHONES__DATA_SUCCESS,
        payload:payload
    }
}
const getLaptopDataSucess=(payload)=>{
    return{
        type:types.GET_PHONES__DATA_SUCCESS,
        payload:payload
    }
}
const getrequestFail=()=>{
    return{
        type:types.GET_DATA_FAILURE,
    }
}
 const getCart=(payload)=>{
    return{
        type:types.GET_CART_DATA,
        payload:payload
    }
 }

const getPhonesData=(quarayParams)=>(dispatch)=>{
    dispatch(getRequestData())
   const {page,limit,brand,sort}=quarayParams;
  return axios.get(`https://mistore-backend.onrender.com/phones?order=${sort}&filter=${brand}&page=${page}&limit=${limit}`)
   .then((res)=>dispatch(getPhonesDataSucess(res.data)))
   .catch(()=>dispatch(getrequestFail()))
     
}

const getTvData=(quarayParams)=>(dispatch)=>{
    dispatch(getRequestData())
   const {page,limit,sort}=quarayParams;
  return axios.get(`https://mistore-backend.onrender.com/tv?order=${sort}&page=${page}&limit=${limit}`)
   .then((res)=>dispatch(getTvDataSucess(res.data)))
   .catch(()=>dispatch(getrequestFail()))
}

const getLaptopData=(quarayParams)=>(dispatch)=>{
    dispatch(getRequestData())
   const {page,limit,category,sort}=quarayParams;
  return axios.get(`https://mistore-backend.onrender.com/laptop?order=${sort}&filter=${category}&page=${page}&limit=${limit}`)
   .then((res)=>dispatch( getLaptopDataSucess(res.data)))
   .catch(()=>dispatch(getrequestFail()))
}
const getCartData=()=>(dispatch)=>{
   const cart=JSON.parse(localStorage.getItem("cart"));
  return dispatch(getCart(cart));
}

 export {getLaptopData,getTvData,getPhonesData,getCartData}