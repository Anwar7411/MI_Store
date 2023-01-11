import * as types from './ActionTypes'

const initialState={
isAuth:false,
isLoading:false,
token:"",
userDetails:{},
isError:false,
}

const reducer=(state=initialState,action)=>{
  const {type,payload}=action;
  switch(type){
    case types.LOGIN_REQUEST : return {
                                        ...state,
                                        isLoading:true,

                                      }
    case types.LOGIN_SUCCESS : return {
                                        ...state,
                                        isLoading:false,
                                        isAuth:true,
                                        token:payload.token,
                                        userDetails:payload.userDetails
                                      }
    case types.LOGIN_REQUEST : return {
                                        ...state,
                                        isAuth:false,
                                        isLoading:false,
                                        isError:true
                                      }
                                      
    case types.LOGOUT_SUCCESS: return initialState
                                                                     
                     default : return state                                  
  }
}
export {reducer}