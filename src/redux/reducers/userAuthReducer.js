import {
    SET_USER,
    USER_COMPLETE_PROFILE_FAILED,
    USER_COMPLETE_PROFILE_REQUEST,
    USER_COMPLETE_PROFILE_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from '../constants/userAuth'


const userAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            }
        case USER_REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            }
        case USER_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case USER_LOGOUT:
            return {
                ...state,
                userInfo: null,
                error: null,
            }
        case SET_USER: 
            return {
                ...state,
                userInfo: action.payload,
            }
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            }
        case USER_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default userAuthReducer
