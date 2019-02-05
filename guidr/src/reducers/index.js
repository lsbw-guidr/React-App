import {REGISTER_NEW_USER,
    REGISTER_SUCCESS,
    LOGIN_USER,
    LOGIN_SUCCESS, 
    FETCHING_TRIPS,
    FETCH_TRIPS_SUCCESS,
    FETCHING_USER_INFO,
    FETCH_USER_SUCCESS
} from '../actions/index'

const initialState = {
    isUserLoggedIn: false,
    loggedInUser: {},
    userInfo: {},
    tripList: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isUserLoggedIn: true,
                // loggedInUser: action.payload.user
                loggedInUser: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
                // loggedInUser: action.payload.user
                loggedInUser: action.payload
            }
        case FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                tripList: action.payload
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}

export default rootReducer