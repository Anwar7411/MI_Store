import * as types from "./ActionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    phones: [],
    tv: [],
    laptop: [],
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
            tv:[],
            laptop:[],
        }
        case types.GET_TV__DATA_SUCCESS: return {
            ...state,
            isLoading: false,
            tv: payload,
            phones:[],
            laptop:[],
            isError: false
        }
        case types.GET_LAPTOP__DATA_SUCCESS: return {
            ...state,
            isLoading: false,
            laptop: payload,
            phones:[],
            tv:[],
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
        default: return state
    }
}

export  {reducer}