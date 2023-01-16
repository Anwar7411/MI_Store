import * as types from "./ActionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    phones: {},
    tv: {},
    laptop: {},
    cart:[],
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_DATA_REQUEST: return {
                                                ...state,
                                                isLoading: true,
                                            }
        case types.GET_PHONES__DATA_SUCCESS: return {
                                                     ...state,
                                                    isLoading: false,
                                                    isError:false,
                                                    phones: payload,
                                                    isError: false,
                                                    }
        case types.GET_TV__DATA_SUCCESS: return {
                                                    ...state,
                                                    isLoading: false,
                                                    tv: payload,
                                                    isError: false
                                                }
        case types.GET_LAPTOP__DATA_SUCCESS: return {
                                                        ...state,
                                                        isLoading: false,
                                                        laptop: payload,
                                                        isError: false
                                                    }
        case types.GET_DATA_FAILURE:return {
                                                ...state,
                                                isLoading:false,
                                                isError:true,
                                                laptop: [],
                                                phones:[],
                                                tv:[],
                                            }
                                            
        case types.GET_CART_DATA: return   {
                                                ...state,
                                                isLoading: false,
                                                cart: payload,
                                                isError: false
                                            }
        
        default: return state
    }
}

export  {reducer}