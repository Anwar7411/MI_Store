import * as types from './ActionTypes'
import axios from 'axios'

const loginRequest=()=>{
    return {
        type:types.LOGIN_REQUEST
    }
}

const loginSuccess=(payload)=>{
    return {
        type:types.LOGIN_SUCCESS,
        payload,
    }
}

const loginFailure=()=>{
    return {
        type:types.LOGIN_FAILURE
    }
}
const logout=()=>{
    return{
        type:types.LOGOUT_SUCCESS
    }
}

const Login=(payload)=>(dispatch)=>{
      dispatch(loginRequest());
      return axios({
        method:"post",
        url:"https://mistore-backend.onrender.com/login",
        data:payload
      }).then((res)=>{
        const userloginn={
            token:res.data.token,
            userDetails:res.data.userDetails,
        }
        dispatch(loginSuccess(userloginn));
      }).catch(()=>{
        dispatch(loginFailure());
      })

}

const Logout=()=>(dispatch)=>{
    dispatch(logout());
}
 

export {Login,Logout}